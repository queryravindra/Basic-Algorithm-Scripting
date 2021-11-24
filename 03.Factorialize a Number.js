// Method - 1
function fact(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
}
  
// Method - 2
function fact(num) {
    if (num === 0) {
      return 1;
    }
    return num * fact(num - 1);
}
  
// Method - 3
function fact(num, factorial = 1) {
    if (num === 0) {
      return factorial;
    } else {
      return fact(num - 1, factorial * num);
    }
}

// Method - 4
function fact(num) {
    return num < 0 ? 1 : new Array(num).fill(undefined).reduce((product, _, index) => product * (index + 1), 1);
}

fact(5);
