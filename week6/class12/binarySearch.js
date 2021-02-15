

function binarySearch (array, lookingFor){

  let L = 0;
  let R = array.length - 1;

  while (L <= R){
    let m = Math.floor( (L+R) / 2);

    if (array[m] < lookingFor){
      L = m + 1;
    } else if (array[m] > lookingFor){
      R = m - 1;
    } else {
      return m;
    }
  }
  return -1;

}