import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Ingredient } from './../ingredients/ingredients.schema';
import { Unit } from 'src/unit/unit.schema';
import mongoose, { HydratedDocument } from 'mongoose';

export type IngredientEntryDocument = HydratedDocument<IngredientEntry>;

@Schema()
export class IngredientEntry {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' })
  ingredient: Ingredient;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Unit' })
  unit: Unit;
}

export const IngredientEntrySchema =
  SchemaFactory.createForClass(IngredientEntry);
