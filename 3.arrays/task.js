function compareArrays(arr1, arr2) {
  return result = arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);

  /*arr1.every((item, index) => {
    if (arr1.length !== arr2.length) {
      return false;
    }
    if (item === arr2[index]) {
      return true;
    } else {
      return false;
    }
  });
  return result; // boolean*/
}

function advancedFilter(arr) {
  return resultArr = arr.filter(item => item >= 0 && item % 3 === 0).map(item => item * 10);

  /*return resultArr; // array*/
}
