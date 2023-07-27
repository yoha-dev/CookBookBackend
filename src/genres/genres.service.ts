import { Injectable } from '@nestjs/common';
import { Genre } from './interfaces/genre.interface';

@Injectable()
export class GenreService {
  private readonly genres: Genre[] = [];

  create(genre: Genre) {
    this.genres.push(genre);
  }

  findAll(): Genre[] {
    return this.genres;
  }
}
