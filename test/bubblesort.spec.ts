import { expect }  from 'chai';
import { bubblesort }  from '../src/bubblesort';

describe('bubblesort', () => {
  it ('can sort a basic list', () => {
    // arrange
    const arr = [3,1,20,9,19,10];

    // action
    let output = bubblesort(arr);

    // assert
    expect(output).to.be.deep.equal([1, 3, 9, 10, 19, 20]);
  });

  // TODO: write more tests to prove to me that you know what's up
});
