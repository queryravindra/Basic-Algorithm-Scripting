// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

// Method - 1
function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}

// Method - 2
function bouncer(arr) {
    return arr.filter(Boolean); // arr.filter( function(x) { return Boolean(x); }); 
}
