import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { IngredientEntry } from './ingredient-entry.schema';
import { Unit } from 'src/unit/unit.schema';

export type RecipeDocument = HydratedDocument<Recipe>;

@Schema()
export class Recipe {
  @Prop({ required: true })
  title: String;

  @Prop()
  description: String;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'IngredientEntries' })
  // ingredientEntries: IngredientEntry[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Unit' })
  unit: Unit;

  @Prop()
  tags: string[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
