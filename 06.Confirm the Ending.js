// Check if a string (first argument, str) ends with the given target string (second argument, target).
// do not use the built-in .endsWith() method.

// Method - 1 (Declarative approach)
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
  
// Method - 2 (using Regular Expression)
function confirmEnding(str, target) {
    let re = new RegExp(target + "$", "i");
  
    return re.test(str);
}
  
// Method - 3 
function confirmEnding(str, target) {
    return str.slice(-target.length) === target
}
  
confirmEnding("Bastian", "n");