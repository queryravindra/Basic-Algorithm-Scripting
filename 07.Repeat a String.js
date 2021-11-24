// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number

// do not use the built-in .repeat() method.

// Method - 1
function repeatStringNumTimes(str, num) {
    var accumulatedStr = "";
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
    }
  
    return accumulatedStr;
}

// Method - 2
function repeatStringNumTimes(str, num) {
    if (num < 1) {
        return "";
    } else {
        return str + repeatStringNumTimes(str, num - 1);
    }
}

// Method - 3 (Recursive Solution)
function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}