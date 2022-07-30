import { NextFunction, Request, Response } from 'express';

const error = 'Id must have 24 hexadecimal characters';

const validId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (id.length === 24) return next();
  return res.status(400).json({ error });
};

export default validId;