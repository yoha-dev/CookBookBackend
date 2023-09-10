import { Ingredient } from 'src/ingredients/ingredients.schema';
import { Unit } from 'src/unit/unit.schema';

export class CreateRecipeDto {
  name: string;
  description: string;
  ingredientEntries: CreateIngredientEntryDto[];
  tags: string[];
  genres: string[];
}

export class CreateIngredientEntryDto {
  ingredient: Ingredient;
  unit: Unit;
}

export class DeleteRecipeDto {
  _id: string;
}
