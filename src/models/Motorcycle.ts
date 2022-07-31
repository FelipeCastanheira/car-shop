import { Schema, model as createModel } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const stringObj = { type: String, required: true };
const numberObj = { type: Number, required: true };
const boolObj = { type: Boolean, required: false };

const motorcycleSchema = new Schema<IMotorcycle>({
  status: boolObj,
  model: stringObj,
  color: stringObj,
  year: numberObj,
  buyValue: numberObj,
  engineCapacity: numberObj,
  category: stringObj,
}, { versionKey: false });

class Motorcycle extends MongoModel<IMotorcycle> {
  constructor(model = createModel('Motorcycle', motorcycleSchema)) {
    super(model);
  }
}

export default Motorcycle;
