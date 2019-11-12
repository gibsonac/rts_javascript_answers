// #1  Print the number of integers in an array that are above the given input and the number that are below, e.g. for the array [1, 5, 2, 1, 10] with input 6, print “above: 1, below: 4”.

function Above_and_Below(givenArray, num) {
    var above = 0;
    var below = 0;
    if (givenArray.length == 0) {
        return "you need numbers in your Array!"
    };
    for (var x = 0; x < givenArray.length; x++) {
        if (givenArray[x] > num) {
            above += 1;
        };
        if (givenArray[x] < num) {
            below += 1;
        };
    };
    return ('above: ' + above + ', below: ' + below);
};
console.log(Above_and_Below([1, 5, 2, 1, 10], 6));

// #2  Rotate the characters in a string by a given input and have the overflow appear at the beginning, e.g. “MyString” rotated by 2 is “ngMyStri”.


function questionTwo(givenString, num) {
    if (num < 0) {
        return "You need a positive number to rotate";
    };
    if (givenString.length == 0 || givenString == null) {
        return "you need to provide a string!";
    };
    num = num % givenString.length;
    if (num == 0) {
        return givenString;
    };
    var tempString = "";
    var untouchedString = givenString.length - num;
    var x = givenString.length - 1;
    while (num > 0) {
        tempString = givenString[x] + tempString;
        num--;
        x--;
    };
    for (var i = 0; i < untouchedString; i++) {
        tempString += givenString[i];
    };
    return tempString;
};
console.log(questionTwo("MyString", 2));

// SECOND AND BETTER WAY
function questionTwoSplit(givenString, num) {
    if (num < 0) {
        return "You need a positive number to rotate";
    };
    if (givenString == "" || givenString == null) {
        return "you need to provide a string!";
    };
    num = num % givenString.length;
    if (num == 0) {
        return givenString;
    };
    var splitLocation = givenString.length - num;
    var answer = "";
    var stringArray = [givenString.slice(0, splitLocation), givenString.slice(splitLocation, givenString.length)];
    for (var x = stringArray.length - 1; x >= 0; x--) {
        answer = answer + stringArray[x];
    };
    return answer;
}
console.log(questionTwoSplit("MyString", 2));