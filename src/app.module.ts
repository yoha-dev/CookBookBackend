import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenreController } from './genres/genres.controller';
import { GenreService } from './genres/genres.service';

@Module({
  imports: [],
  controllers: [AppController, GenreController],
  providers: [AppService, GenreService],
})
export class AppModule {}
