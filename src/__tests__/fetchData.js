import fetchData from '../http';
import getLevel from '../fetchData';

jest.mock('../http.js');

beforeEach(() => {
  jest.resetAllMocks();
});

test('testing getLevel if status ok', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: '45',
  });
  const expected = getLevel(1);
  const recieved = 'Ваш текущий уровень: 45';
  expect(expected).toBe(recieved);
});

test('testing getLevel if status nope', () => {
  fetchData.mockReturnValue({
    status: 'nope',
  });
  const expected = getLevel(2);
  const recieved = 'Информация об уровне временно недоступна';
  expect(expected).toBe(recieved);
});
