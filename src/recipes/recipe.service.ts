import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe } from './recipes.schema';
import { CreateRecipeDto } from './dto/create-recipe.dto';

@Injectable()
export class RecipeService {
  constructor(@InjectModel(Recipe.name) private RecipeModel: Model<Recipe>) {}

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const createdRecipe = new this.RecipeModel(createRecipeDto);
    return createdRecipe.save();
  }

  findAll(): Promise<Recipe[]> {
    return this.RecipeModel.find().exec();
  }

  delete(createRecipeDto: CreateRecipeDto) {
    return this.RecipeModel
      .find({ name: createRecipeDto.name })
      .findOneAndRemove();
  }
}
