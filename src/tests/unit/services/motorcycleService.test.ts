import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import MotorcycleModel from '../../../models/Motorcycle';
import MotorcycleService from '../../../services/MotorcycleService';
import { motorcycleMock, motorcycleMockWithId } from '../../mocks/motorcycleMock';

describe('motorcycle Service', () => {
	const motorcycleModel = new MotorcycleModel();
	const motorcycleService = new MotorcycleService(motorcycleModel);

	before(() => {
		sinon.stub(motorcycleModel, 'create').resolves(motorcycleMockWithId);
		sinon.stub(motorcycleModel, 'read').resolves([motorcycleMockWithId]);
		sinon.stub(motorcycleModel, 'readOne')
			.onCall(0).resolves(motorcycleMockWithId) 
			.onCall(1).resolves(null); 
	})
	after(() => {
		sinon.restore()
	})
	describe('Create motorcycle', () => {
		it('Success', async () => {
			const motorcycleCreated = await motorcycleService.create(motorcycleMock);

			expect(motorcycleCreated).to.be.deep.equal(motorcycleMockWithId);
		});

		it('Failure', async () => {
			try {
				await motorcycleService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('Read motorcycles', () => {
		it('Success', async () => {
			const motorcyclesRead = await motorcycleService.read();

			expect(motorcyclesRead).to.be.an('array');
		});
	});

	describe('ReadOne motorcycle', () => {
		it('Success', async () => {
			const motorcycleCreated = await motorcycleService.readOne(motorcycleMockWithId._id);

			expect(motorcycleCreated).to.be.deep.equal(motorcycleMockWithId);
		});

		it('Failure', async () => {
			try {
				await motorcycleService.readOne(motorcycleMockWithId._id);
			} catch (error:any) {
				expect(error.message).to.be.a('string');
			}
		});
	});
});
