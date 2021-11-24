// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending

// Method - 1
function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
}

// Method - 2
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}

function truncateString(str, num) {
    if(str.length > num) {
        let subStr = str.substr(0, num) + '...';

        return subStr;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);