import { expect } from 'chai';
import { insertsort } from '../src/insertsort';

describe('insertsort', () => {
  it ('can sort a basic list', () => {
    // arrange
    const arr = [3,1,20,9,19,10];

    // action
    let output = insertsort(arr);

    // assert
    expect(output).to.be.deep.equal([1, 3, 9, 10, 19, 20]);
  });
});
