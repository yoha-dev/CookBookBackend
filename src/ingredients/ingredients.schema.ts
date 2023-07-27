import { HydratedDocument } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Unit } from 'src/unit/unit.schema';

export type IngredientDocument = HydratedDocument<Ingredient>;

@Schema()
export class Ingredient {
  @Prop()
  name: string;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
