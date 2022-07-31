import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

type ErrType = {
  error: string;
};
const error = 'Object not found';

export default class MotorcycleController {
  constructor(private _service: IService<IMotorcycle>) { }

  public async create(
    req: Request & { body: IMotorcycle }, 
    res: Response<IMotorcycle>,
  ) {
    const results = await this._service.create(req.body);
    return res.status(201).json(results);
  }

  public async readOne(
    req: Request,
    res: Response<IMotorcycle | ErrType>,
  ) {
    const result = await this._service.readOne(req.params.id);
    if (!result) return res.status(404).json({ error });
    return res.status(200).json(result);
  }

  public async read(
    _req: Request,
    res: Response<IMotorcycle[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async update(req: Request, res: Response<IMotorcycle | ErrType>) {
    const exists = await this._service.readOne(req.params.id);
    const result = await this._service.update(req.params.id, req.body);
    if (!exists || !result) return res.status(404).json({ error });
    return res.status(200).json(result);
  }

  public async delete(req: Request, res: Response<IMotorcycle | ErrType>) {
    const exists = await this._service.readOne(req.params.id);
    await this._service.delete(req.params.id);
    if (!exists) return res.status(404).json({ error });
    return res.status(204).json();
  }
}
