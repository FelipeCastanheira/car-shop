import { IMotorcycle } from '../../interfaces/IMotorcycle';

const motorcycleMock: IMotorcycle = {
  model: 'Honda',
  color: 'blue',
  year: 2000,
  buyValue: 9900,
  category: 'Custom',
  engineCapacity: 3,
};

const motorcycleMockWithId: IMotorcycle & { _id: string } = {
	_id: '8767ebb52cf1d94fc94962ad',
  model: 'Suzuki',
  color: 'black',
  year: 1999,
  buyValue: 5900,
  category: 'Custom',
  engineCapacity: 10,
};

export {
	motorcycleMock,
	motorcycleMockWithId,
};
