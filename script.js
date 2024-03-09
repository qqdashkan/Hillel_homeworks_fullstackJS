//task 1

let vowels = [ 'a', 'o', 'u', 'i', 'e' , 'y']
let count = 0;

function letCountVowels(args) {
    let arr = Array.from(args.toLowerCase());

        for (let i of vowels) {
            for (let char of arr) {
                if (i === char) {
                    count++;
                }
            }

        }
    return count;
}

console.log(letCountVowels("My dear WATSON!"));


//task 2

function moveOver(arr, position) {
    if (position === 'end') {
        let elem = arr.shift();
        arr.push(elem);
    } else if (position === 'start') {
        let elem = arr.pop();
        arr.splice(0, 0, elem)
    }
    return arr;
}

console.log(moveOver([1,2,3,4], 'start'));

//task 3

function findLongestWord(expresion) {
    let arrOfWords = expresion.split(' ');
    let smallestWord = 0;
    let longestWord = '';

    //вариант 1
    let arr = arrOfWords.map(word => word.length);
    let minimum = Math.min(...arr);

    arrOfWords.forEach(word => {
        if (word.length === minimum) {
            smallestWord = word;
        }
    });

    //вариант 2
    for (let word of arrOfWords) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return {
        smallestWord,
        longestWord,
    }
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
