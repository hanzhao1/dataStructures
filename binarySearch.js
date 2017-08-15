'use strict';

var testArray = [1,2,3,4,5,6,7,8,9]

var binarySearch = function (array, value, max, min) {
  max = max || array.length -1 ;
  min = min || 0;
  var middle = Math.floor((max - min)/2);

  if( array[middle] === value ){
    return middle;
  }
  if( array[middle] > value){
    return binarySearch(array, value, middle, min)
  } else {
    return binarySearch(array, value, max, middle)
  }

}

console.log(binarySearch(testArray))