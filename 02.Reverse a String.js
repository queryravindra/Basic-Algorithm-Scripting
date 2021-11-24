// Method - 1
function reverseString(str) {
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
}

// Method - 2
function reverseString(str) {
    return str.split("").reverse().join("");
}

reverseString("hello");