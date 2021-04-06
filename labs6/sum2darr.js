// Да се дефинира функция countEvenNumbers, която връща броя четни числа в
// подаденият й масив от числа.
let countEvenNumbers = function(evenCount) {
    let count = 0;
    for (i = 0; i < evenCount.length; i++) {
        if (evenCount[i] % 2 === 0) {
            count++;
        }
    }
    return count
}

// примерно извикване:
let evenCount = countEvenNumbers([1, 4, 2, 3, 5, 6, 2, 8, 9]);
console.log(evenCount);
// 2