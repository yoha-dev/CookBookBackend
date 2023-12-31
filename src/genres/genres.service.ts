import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre } from './genre.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class GenreService {
  constructor(@InjectModel(Genre.name) private genreModel: Model<Genre>) {}

  async create(createGenreDto: CreateGenreDto): Promise<Genre> {
    const createdGenre = new this.genreModel(createGenreDto);
    return createdGenre.save();
  }

  findAll(): Promise<Genre[]> {
    return this.genreModel.find().exec();
  }

  delete(createGenreDto: CreateGenreDto):Promise<CreateGenreDto> {
    return this.genreModel
      .find({ name: createGenreDto.name })
      .findOneAndRemove();
  }

  async exists(name: string): Promise<Boolean> {
    let exists = await this.genreModel.exists({ name: name });
    return exists === null ? false : true;
  }
}
