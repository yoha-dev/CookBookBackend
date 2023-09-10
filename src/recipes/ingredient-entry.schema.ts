import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Ingredient } from './../ingredients/ingredients.schema';
import { Unit } from 'src/unit/unit.schema';
import mongoose, { HydratedDocument } from 'mongoose';

export type IngredientEntryDocument = HydratedDocument<IngredientEntry>;

@Schema()
export class IngredientEntry {
  @Prop()
  position: number;

  @Prop()
  ingredient: Ingredient;

  @Prop()
  unit: Unit;

  @Prop()
  amount: number;
}

export const IngredientEntrySchema =
  SchemaFactory.createForClass(IngredientEntry);
