import { ICar, CarZod } from '../interfaces/ICar';
import IService from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';

class CarService implements IService<ICar> {
  private _car:IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj:ICar):Promise<ICar> {
    // const parsed = CarZod.safeParse(obj);
    // if (!parsed.success) {
    //   throw parsed.error;
    // }
    return this._car.create(obj);
  }

  public async readOne(_id:string):Promise<ICar> {
    const car = await this._car.readOne(_id);
    if (!car) throw new Error();
    return car;
  }

  public async read():Promise<ICar[]> {
    const cars = await this._car.read();
    if (!cars) throw new Error();
    return cars;
  }

  public async update(_id:string, obj:ICar):Promise<ICar | null> {
    const parsed = CarZod.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    await this.readOne(_id);
    return this._car.update(_id, obj);
  }
}

export default CarService;
