import ErrorRepository from '../index';

test.each([[1, 'Timeout Error'],
  [2, 'Connection Error'],
  [3, 'Incorrect Data'],
  [4, 'Unknown error'],
])('basic test', (code, expectedResult) => {
  const rep = new ErrorRepository();
  expect(rep.translate(code)).toBe(expectedResult);
});
