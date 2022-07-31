import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const aditionalProps = {
  _id: z.string().optional(),
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().gt(0).lt(2501).int(),
};

export const MotorcycleZod = VehicleZodSchema.extend(aditionalProps);

export type IMotorcycle = z.infer<typeof MotorcycleZod>;
