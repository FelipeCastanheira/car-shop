import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const aditionalProps = {
  _id: z.string().optional(),
  doorsQty: z.number().gt(1).lt(5),
  seatsQty: z.number().gt(1).lt(8),
};

export const CarZod = VehicleZodSchema.extend(aditionalProps);

export type ICar = z.infer<typeof CarZod>;
