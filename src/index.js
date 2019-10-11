module.exports = function multiply(first, second) {
  let arr1 = [...first],
    arr2 = [...second],
    result = [],
    memory = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (result[i + j]) {
        result[i + j] += arr1[i] * arr2[j];
      } else {
        result[i + j] = arr1[i] * arr2[j];
      }
    }
  }
  result.reverse();
  result.forEach((item, i) => {
    if(item > 9 && i != result.length - 1) {
      memory = Math.trunc(item/10);
      result[i] = (item%10);
      result[i+1] += memory;
    } 
  });
  return result.reverse().join('');
};
