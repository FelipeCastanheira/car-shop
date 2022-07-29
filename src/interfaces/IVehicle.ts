import { z } from 'zod';

// export interface IVehicle {
//   year: number;
//   color: string;
//   status: boolean;
//   buyValue: number;
// }

const ZodSchema = z.object({
  model: z.string().min(3),
  year: z.number().gte(1900).lte(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

export type IVehicle = z.infer<typeof ZodSchema>;
