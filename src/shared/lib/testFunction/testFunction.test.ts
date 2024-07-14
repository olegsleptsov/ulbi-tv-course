import {testFunction} from './testFunction';

describe('testFunction', () => {
  it('1 + 2 = 3', () => {
    expect(testFunction(1, 2)).toBe(3)
  })
})