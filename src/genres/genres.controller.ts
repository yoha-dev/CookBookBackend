import { GenreService } from './genres.service';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre } from './genre.schema';

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
  async delete(@Body() createGenreDto: CreateGenreDto) {
    return this.genreService.delete(createGenreDto);
  }
}
