// Write a function that splits an array (first argument) into groups the length of size (second argument) 
// and returns them as a two-dimensional array.

// Method - 1 
function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];
  
    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }
  
    if (temp.length !== 0) result.push(temp);
    return result;
}

// Method - 2
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

// Method - 3 
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let i = 0;
  
    while (i < arr.length) {
        newArr.push(arr.slice(i, i + size));
        i += size;
    }
    return newArr;
}

// Method - 4 
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}

// Method - 5 
function chunkArrayInGroups(arr, size) {
    if (arr.length <= size) {
        return [arr];
    } else {
        return [arr.slice(0, size)].concat(
            chunkArrayInGroups(arr.slice(size), size)
        );
    }
}

// 
let result = [];

function chunkArrayInGroups(arr, size) {
    if(size > arr.length) {
        return arr;
    }
    let newArr = arr.splice(size);

    result = [[...arr], ...chunkArrayInGroups(newArr, size)]
    return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);