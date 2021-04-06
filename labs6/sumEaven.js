/* -------------------------------------------------------------------------- */
/*                                    task                                    */
/* -------------------------------------------------------------------------- */
// Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от
// четните елементи на подаден й двумерен масив.

let arr = [
    [1, 2, 3],
    [4, 5, 6]
];
// >>>> put your code bellow:
let SumEven2DimArrayElements = function(arr) {
    let tmp = [];
    let tmp2 = [];

    for (i = 0; i < arr.length; i++) {
        tmp = arr[i]
        for (j = 0; j < tmp.length; j++) {
            tmp2.push(tmp[j]);
        }
    }
    let sum = 0;
    for (i = 0; i < tmp2.length; i++) {
        if (tmp2[i] % 2 == 0) {
            sum = sum * 1 + tmp2[i] * 1;
        }
    }
    return sum;
}

// <<<< end of your code

// Примерно извикване на функцията:
let sum = SumEven2DimArrayElements(arr);
console.log(sum);
// expected output: 12