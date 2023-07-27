import { GenreService } from './genres.service';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { Genre } from './interfaces/genre.interface';
import { CreateGenreDto } from './dto/create-genre.dto';

@Controller('genres')
export class GenreController {
  constructor(private genreService: GenreService) {}

  @Get()
  async findAll(): Promise<Genre[]> {
    return this.genreService.findAll();
  }

  @Post()
  async create(@Body() createGenreDto: CreateGenreDto) {
    this.genreService.create(createGenreDto);
  }

  @Delete()
  async delete(@Body() createGenreDto: CreateGenreDto){
    this.genreService.delete(createGenreDto);
  }

}
