import { NextFunction, Request, Response } from 'express';
import { MotorcycleZod } from '../interfaces/IMotorcycle';

const validMotorcycle = (req: Request, res: Response, next: NextFunction) => {
  const parsed = MotorcycleZod.safeParse(req.body);
  if (parsed.success) return next();
  return res.status(400).json(JSON.stringify(parsed));
};

export default validMotorcycle;
