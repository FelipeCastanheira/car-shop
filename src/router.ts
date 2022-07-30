import { Router } from 'express';
import CarController from './controllers/CarController';
import Car from './models/Car';
import CarService from './services/CarService';

const route = Router();

const carModel = new Car();
const carService = new CarService(carModel);
const carController = new CarController(carService);

route.post('/car', (req, res) => carController.create(req, res));
// route.get('/car/:id', (req, res) => carController.readOne(req, res));
// route.put('/car/:id', (req, res) => carController.update(req, res));

export default route;
