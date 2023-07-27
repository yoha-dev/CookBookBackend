import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Genre } from './interfaces/genre.interface';
import { CreateGenreDto } from './dto/create-genre.dto';
import { createECDH } from 'crypto';

@Injectable()
export class GenreService {
  private genres: Genre[] = [];

  create(genre: Genre) {
    this.genres.push(genre);
  }

  findAll(): Genre[] {
    return this.genres;
  }

  delete(createGenreDto: CreateGenreDto) {
    this.genres = this.genres.filter( gen => gen.name !== createGenreDto.name)
  }
}
