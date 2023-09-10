import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipes.schema';
import { CreateRecipeDto, DeleteRecipeDto } from './dto/create-recipe.dto';

@Controller('recipes')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}

  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipeService.findAll();
  }
  title: string;

  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto) {
    return await this.recipeService.create(createRecipeDto);
  }

  @Delete()
  async delete(@Body() deleteRecipeDto: DeleteRecipeDto) {
    this.recipeService.delete(deleteRecipeDto);
  }
}
