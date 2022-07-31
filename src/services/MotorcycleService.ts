import { IMotorcycle, MotorcycleZod } from '../interfaces/IMotorcycle';
import IService from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';

class MotorcycleService implements IService<IMotorcycle> {
  private _motorcycle:IModel<IMotorcycle>;

  constructor(model:IModel<IMotorcycle>) {
    this._motorcycle = model;
  }

  public async create(obj:IMotorcycle):Promise<IMotorcycle> {
    return this._motorcycle.create(obj);
  }

  public async readOne(_id:string):Promise<IMotorcycle | null> {
    const motorcycle = await this._motorcycle.readOne(_id);
    if (!motorcycle) return null;
    return motorcycle;
  }

  public async read():Promise<IMotorcycle[]> {
    const motorcycles = await this._motorcycle.read();
    if (!motorcycles) throw new Error();
    return motorcycles;
  }

  public async update(_id:string, obj:IMotorcycle):Promise<IMotorcycle | null> {
    const parsed = MotorcycleZod.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    await this.readOne(_id);
    return this._motorcycle.update(_id, obj);
  }

  public async delete(_id:string):Promise<IMotorcycle | null> {
    return this._motorcycle.delete(_id);
  }
}

export default MotorcycleService;
