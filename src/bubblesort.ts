export function bubblesort(inputArray) {
  for (let i=0; i < inputArray.length; i++) {
    for (let j=0; j<inputArray.length; j++) {
      if (inputArray[j] > inputArray[j+1]) {
        let num = inputArray[j];
        inputArray[j] = inputArray[j+1];
        inputArray[j+1] = num;
      }
    }
  } 
  return inputArray; 
}

