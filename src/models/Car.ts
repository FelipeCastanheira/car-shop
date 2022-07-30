import { Schema, model as createModel } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const stringObj = { type: String, required: true };
const numberObj = { type: Number, required: true };
const boolObj = { type: Boolean, required: false };

const carSchema = new Schema<ICar>({
  status: boolObj,
  model: stringObj,
  color: stringObj,
  year: numberObj,
  buyValue: numberObj,
  doorsQty: numberObj,
  seatsQty: numberObj,
}, { versionKey: false });

class Car extends MongoModel<ICar> {
  constructor(model = createModel('Car', carSchema)) {
    super(model);
  }
}

// const carModel = model<ICar>('Car', carSchema);

export default Car;
