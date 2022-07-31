import { Router } from 'express';
import CarController from './controllers/CarController';
import MotorcycleController from './controllers/MotorcycleController';
import validCar from './middlewares/validCar';
import validId from './middlewares/validId';
import validMotorcycle from './middlewares/validMotorcycle';
import Car from './models/Car';
import Motorcycle from './models/Motorcycle';
import CarService from './services/CarService';
import MotorcycleService from './services/MotorcycleService';

const route = Router();

const carModel = new Car();
const carService = new CarService(carModel);
const carController = new CarController(carService);

route.post('/cars', validCar, (req, res) => carController.create(req, res));
route.get('/cars', (req, res) => carController.read(req, res));
route.get('/cars/:id', validId, (req, res) => carController.readOne(req, res));
route.put(
  '/cars/:id',
  validId,
  validCar,
  (req, res) => carController.update(req, res),
);
route.delete(
  '/cars/:id',
  validId,
  (req, res) => carController.delete(req, res),
);

const motorcycleModel = new Motorcycle();
const motorcycleService = new MotorcycleService(motorcycleModel);
const motorcycleController = new MotorcycleController(motorcycleService);

const pathByMotoId = '/motorcycles/:id';

route.post(
  '/motorcycles',
  validMotorcycle,
  (req, res) => motorcycleController.create(req, res),
);
route.get('/motorcycles', (req, res) => motorcycleController.read(req, res));
route.get(
  pathByMotoId,
  validId,
  (req, res) => motorcycleController.readOne(req, res),
);
route.put(
  pathByMotoId,
  validId,
  validMotorcycle,
  (req, res) => motorcycleController.update(req, res),
);
route.delete(
  pathByMotoId,
  validId,
  (req, res) => motorcycleController.delete(req, res),
);

export default route;
