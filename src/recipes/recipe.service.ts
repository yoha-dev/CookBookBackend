import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe } from './recipes.schema';
import { CreateRecipeDto, DeleteRecipeDto } from './dto/create-recipe.dto';
import { GenreService } from 'src/genres/genres.service';

@Injectable()
export class RecipeService {
  constructor(
    @InjectModel(Recipe.name) private RecipeModel: Model<Recipe>,
    private genreService: GenreService
  ) {}

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {

    for (const genre of createRecipeDto.genres){
      const exists = await this.genreService.exists(genre);
      if (exists === false) {
        throw new HttpException('Genre Not Found', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    const createdRecipe = new this.RecipeModel(createRecipeDto);
    return createdRecipe.save();
  }

  findAll(): Promise<Recipe[]> {
    return this.RecipeModel.find().exec();
  }

  async delete(deleteRecipeDto: DeleteRecipeDto) {
    console.log(deleteRecipeDto);
    return this.RecipeModel.findByIdAndRemove(deleteRecipeDto._id);
  }
}
