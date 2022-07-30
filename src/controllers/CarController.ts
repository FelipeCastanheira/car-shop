import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

type ErrType = {
  error: string;
};

export default class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(
    req: Request & { body: ICar }, 
    res: Response<ICar>,
  ) {
    // const { model, year, color, buyValue, seatsQty, doorsQty } = req.body;
    // const carBody = { model, year, color, buyValue, seatsQty, doorsQty };
    const results = await this._service.create(req.body);
    return res.status(201).json(results);
  }

  public async readOne(
    req: Request,
    res: Response<ICar | ErrType>,
  ) {
    const result = await this._service.readOne(req.params.id);
    const error = 'Object not found';
    if (!result) return res.status(404).json({ error });
    return res.status(200).json(result);
  }

  public async read(
    _req: Request,
    res: Response<ICar[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async update(
    req: Request,
    res: Response<ICar | null>,
  ) {
    const result = await this._service.update(req.params.id, req.body);
    return res.status(201).json(result);
  }
}
