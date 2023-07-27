import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
import { RecipeService } from "./recipe.service";
import { Recipe } from "./recipes.schema";
import { CreateRecipeDto } from "./dto/create-recipe.dto";

@Controller('recipes')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}

  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipeService.findAll();
  }

  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto) {
    return await this.recipeService.create(createRecipeDto);
  }

  @Delete()
  async delete(@Body() createRecipeDto: CreateRecipeDto) {
    this.recipeService.delete(createRecipeDto);
  }
}
