//option 1
function retSumArr(arr) {
    const sumArr = arr.reduce((accumalator, value) => {
        accumalator += value;
        return accumalator;
    }
        , 0)
    return sumArr;
}

//option 2
function retSumArr2(arr) {
    const sumArr = arr.reduce(tempFunc, 0)
    return sumArr;
}

function tempFunc(accumalator, value) {
    accumalator += value;
    return accumalator;
}

// const arr=[5,10,7]
// console.log(retSumArr(arr))


function findMax() {
    const numbers = [5, 13, 2, 8, 20, 3];
    // השתמש בפונקציית reduce כדי למצוא את הערך המקסימלי
    const max = numbers.reduce((accumulator, currentValue) => {
        return Math.max(accumulator, currentValue);
    }, numbers[0]);

    console.log(max); // התוצאה צריכה להיות 20
}
console.log("הי שמי רבקה בראשי")







