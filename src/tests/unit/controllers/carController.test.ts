import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import CarController from '../../../controllers/CarController';
import CarService from '../../../services/CarService';
import CarModel from '../../../models/Car';
import { carMock, carMockWithId } from '../../mocks/carMock';


describe('Car Controller - Create and Read One', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  
  const req = {} as Request; 
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMock);
    sinon.stub(carService, 'readOne').resolves(carMock);

    sinon.stub(carService, 'read').resolves([carMock]);
    sinon.stub(carService, 'update').resolves(carMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create car', () => {
    it('Success', async () => {
      req.body = carMock;
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('ReadOne car', () => {
    it('Success', async () => {
      req.params = { id: carMockWithId._id };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });


  describe('read cars', () => {
    it('Success', async () => {
      await carController.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([carMock])).to.be.true;
    });
  });

  // describe('update car', () => {
  //   it('Fail', async () => {
  //     req.params = { id: carMockWithId._id };
  //     req.body = {};
  //     await carController.update(req, res);

  //     expect((res.status as sinon.SinonStub).calledWith(400)).to.be.true;
  //   });
  // });

  describe('update car', () => {
    it('Success', async () => {
      req.params = { id: carMockWithId._id };
      req.body = carMockWithId;
      await carController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  });
});
