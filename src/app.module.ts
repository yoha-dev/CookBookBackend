import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenreModule } from './genres/genres.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { UnitModule } from './unit/unit.module';

@Module({
  imports: [
    GenreModule,
    RecipesModule,
    MongooseModule.forRoot(
      'mongodb+srv://mongoDBAdminUser:8tQbKBPcEh68f2q@cluster0.jrcex.mongodb.net/Cookbook?retryWrites=true&w=majority'
    ),
    IngredientsModule,
    UnitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
