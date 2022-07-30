import { Router } from 'express';
import CarController from './controllers/CarController';
import validCar from './middlewares/validCar';
import validId from './middlewares/validId';
import Car from './models/Car';
import CarService from './services/CarService';

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

export default route;
