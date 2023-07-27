import { Module } from "@nestjs/common";
import { GenreController } from "./genres.controller";
import { GenreService } from "./genres.service";

@Module({
    controllers: [GenreController],
    providers: [GenreService]
})
export class GenreModule {}