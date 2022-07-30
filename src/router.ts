import { Router } from 'express';
import CarController from './controllers/CarController';
import validCar from './middlewares/validCar';
import Car from './models/Car';
import CarService from './services/CarService';

const route = Router();

const carModel = new Car();
const carService = new CarService(carModel);
const carController = new CarController(carService);

route.post('/cars', validCar, carController.create);
// route.get('/car/:id', carController.readOne);
// route.put('/car/:id', carController.update);

export default route;
