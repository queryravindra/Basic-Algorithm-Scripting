// Return the lowest index at which a value (second argument) should be inserted 
// into an array (first argument) once it has been sorted.The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it 
// is greater than 1 (index 0), but less than 2 (index 1).

// Method - 1
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num)
            return i;
    }
  
    return arr.length;
}

// Method - 2
function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}

// Method - 3 (Using .findIndex())
function getIndexToIns(arr, num) {
    // sort and find right index
    let index = arr
        .sort((curr, next) => curr - next)
        .findIndex(currNum => num <= currNum);
    // Returns index or total length of arr
    return index === -1 ? arr.length : index;
}
  
// Method - 4
function getIndexToIns(arr, num) {
    return arr
        .concat(num)
        .sort((a, b) => a - b)
        .indexOf(num);
}
  
getIndexToIns([1, 3, 4], 2);