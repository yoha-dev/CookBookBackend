import { HydratedDocument } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

export type GenreDocument = HydratedDocument<Genre>;

@Schema()
export class Genre {
  @Prop()
  name: string;
}

export const GenreSchema = SchemaFactory.createForClass(Genre);
