import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

const errHandler: ErrorRequestHandler = ( 
  err: Error | ZodError, 
  _req,
  res,
  _next,
) => {
  // if (err instanceof ZodError) {  
  const { message } = err;
  return res.status(400).json({ message });
  
  // }
  // return res.status(500).json({ message: err.message });
};

export default errHandler;