import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUnitDto, Unit } from './unit.schema';
import { Model } from 'mongoose';

@Injectable()
export class UnitService {
  constructor(@InjectModel(Unit.name) private UnitModel: Model<Unit>) {}

  findAll(): Promise<Unit[]> {
    return this.UnitModel.find().exec();
  }
}
