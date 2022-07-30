import { NextFunction, Request, Response } from 'express';
import { CarZod } from '../interfaces/ICar';

const validCar = (req: Request, res: Response, next: NextFunction) => {
  const parsed = CarZod.safeParse(req.body);
  if (parsed.success) return next();
  return res.status(400).json(JSON.stringify(parsed));
};

export default validCar;
