/* -------------------------------------------------------------------------- */
/*                            task: generateRandomNumber                      */
/* -------------------------------------------------------------------------- */
// Да се дефинира функцията generateRandomNumber(start, end), която генерира
// цяло случайно число в интервала, зададен чрез параметрите start и end.
// Hint: използвайте Math.random() функцията за генериране на случайно число.
let generateRandomNumber = function(start, end) {
    let rndm = Math.random();
    console.log(rndm);
    return (Math.floor(rndm * (end - start)));
}

// примерно извикване:
let randomNumber = generateRandomNumber(1, 100);
console.log(randomNumber);
// randomNumber трябва да е цяло число, като 1 >= randomNumber <=100