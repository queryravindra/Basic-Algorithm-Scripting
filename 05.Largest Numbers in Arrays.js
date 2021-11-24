// Return an array consisting of the largest number from each provided sub-array. 

// Method - 1 (Procedural approach)
function largestOfFour(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }
  
    return results;
}

// Method - 2 (Declarative approach)
function largestOfFour(arr) {
    return arr.map(function(group) {
        return group.reduce(function(prev, current) {
            return current > prev ? current : prev;
        });
    });
}

// Method - 3 (Declarative approach)
function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}

// Method - 4 (Recursive approach)
function largestOfFour(arr, finalArr = []) {
    return !arr.length
      ? finalArr
      : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}

//
function largestOfFour(arr) {
    let largest = [];
    for(let i=0; i<arr.length; i++) {
      largest.push(Math.max(...arr[i]))
    }
  
    return largest;
}
  
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));