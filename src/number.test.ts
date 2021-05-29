import {
  sum,
  subtraction,
} from './number';

test('adds 1 + 2 equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtraction 3 - 2 equal 1', () => {
  expect(subtraction(3, 2)).toBe(1);
});
