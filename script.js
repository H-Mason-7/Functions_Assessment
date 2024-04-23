
function firstLetterName(name) {
    alert('The name ' + name + ' starts with the letter ' + name[0])
}

function divisibleByTwo(x) {
    if (x % 2 === 0) {
        return true;
    } else if (x % 2 === 1) {
        return false;
    }
}

const myArr = [3, 5, 2, 9, 7];
function largestNum(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] > largest) {
        largest = arr[i];
       }
    }
    console.log(largest);
}

firstLetterName("Chicken");

divisibleByTwo(20);

largestNum(myArr);