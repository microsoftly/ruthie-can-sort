import { expect } from 'chai';
import { radixsort } from '../src/radixsort';

describe('radixsort', () => {
  it ('can sort a basic list', () => {
    // arrange
    const arr = [3,1,20,9,19,10];

    // action
    let output = radixsort(arr);

    // assert
    expect(output).to.be.deep.equal([1, 3, 9, 10, 19, 20]);
  });
});
