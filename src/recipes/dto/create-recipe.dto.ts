import { Ingredient } from 'src/ingredients/ingredients.schema';
import { Unit } from 'src/unit/unit.schema';

export class CreateRecipeDto {
  name: string;
  description: string;
  ingredientEntries: CreateIngredientEntryDto[];
}

export class CreateIngredientEntryDto {
  ingredient: Ingredient;
  unit: Unit;
}
