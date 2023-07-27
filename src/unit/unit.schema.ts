import { HydratedDocument } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

export type UnitDocument = HydratedDocument<Unit>;

@Schema()
export class Unit {
  @Prop()
  name: string;
}

export const UnitSchema = SchemaFactory.createForClass(Unit);

export class CreateUnitDto {
  name: string;
}
