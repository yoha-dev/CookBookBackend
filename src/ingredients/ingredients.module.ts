import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ingredient, IngredientSchema } from './ingredients.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ingredient.name, schema: IngredientSchema },
    ]),
  ],
})
export class IngredientsModule {}
