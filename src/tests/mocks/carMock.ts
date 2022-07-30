import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  model: 'Veloster',
  color: 'blue',
  year: 2000,
  buyValue: 9900,
  doorsQty: 3,
  seatsQty: 5,
};

const carMockWithId: ICar & { _id: string } = {
	_id: '8767ebb52cf1d94fc94962ad',
  model: 'Palio',
  color: 'black',
  year: 1999,
  buyValue: 5900,
  doorsQty: 4,
  seatsQty: 5,
};

export {
	carMock,
	carMockWithId,
};
