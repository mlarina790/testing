import Valid from '../Valid';

test('should create a new object class Valid', () => {
  const expected = {
    str: '123',
  };

  const result = new Valid('123');
  expect(result).toEqual(expected);
});

test('should cut str', () => {
  const expected = '12';

  const valid = new Valid('123');
  const result = valid.cutStr();

  expect(result).toEqual(expected);
});

test('should return arr', () => {
  const expected = ['1', '2', '3'];

  const valid = new Valid('123');
  const result = valid.getArr('123');
  expect(result).toEqual(expected);
});

test('should return reverse arr', () => {
  const expected = ['3', '2', '1'];

  const valid = new Valid('123');
  const result = valid.reverseStr(['1', '2', '3']);
  expect(result).toEqual(expected);
});

test('arrays should be divided into even and odd elements', () => {
  const expected = {
    oddArr: ['1', '3'],
    evenArr: ['2', '4'],
  };

  const valid = new Valid('1234');
  const result = valid.separat(['1', '2', '3', '4']);
  expect(result).toEqual(expected);
});

test('const return arr with el < 9', () => {
  const expected = [3, 4, 1, 8];

  const valid = new Valid('1234');
  const result = valid.check(['6', '2', '5', '4']);
  expect(result).toEqual(expected);
});

test('should return summ el', () => {
  const expected = 10;

  const valid = new Valid('1234');
  const result = valid.getSumArr(['1', '2', '3', '4']);

  expect(result).toEqual(expected);
});

test('should return true', () => {
  const valid = new Valid('4556737586899855');
  const result = valid.checkValid(85);
  expect(result).toBeTruthy();
});

test('should return false', () => {
  const valid = new Valid('4556737586899857');
  const result = valid.checkValid(85);
  expect(result).toBeFalsy();
});

test('should return true', () => {
  const valid = new Valid('4556737586899855');
  const result = valid.start();
  expect(result).toBeTruthy();
});

test('should return false', () => {
  const valid = new Valid('4556737586899857');
  const result = valid.start();
  expect(result).toBeFalsy();
});
