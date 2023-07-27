import { Module } from '@nestjs/common';
import { GenreController } from './genres.controller';
import { GenreService } from './genres.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Genre, GenreSchema } from './genre.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Genre.name, schema: GenreSchema }]),
  ],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
