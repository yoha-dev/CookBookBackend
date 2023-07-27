import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Recipe, RecipeSchema } from './recipes.schema';
import { RecipeController } from './recipes.controller';
import { RecipeService } from './recipe.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }]),
  ],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipesModule {}
