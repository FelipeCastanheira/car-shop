import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const aditionalProps = {
  doorsQty: z.number().gt(1).lt(5),
  seatsQty: z.number().gt(1).lt(8),
};

const CarZod = VehicleZodSchema.extend(aditionalProps);

export type ICar = z.infer<typeof CarZod>;
