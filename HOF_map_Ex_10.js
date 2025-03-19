function onlyPos(arr) {
    const newArr = arr.map(value => {
        if (value >= 0)
            return value * 2;
        return value * (-1);
    });
    return newArr;
}



function positiveArr(arr) {
    const newArr = arr.filter(value => { return value > 0 });
    return newArr;
}


function findOlderProduct(datesArr) {
    const today = new Date();
    let max = 0;
    let max_i = -1;
    const todayMiliSec = today.getTime();//today date in miliseconds
    datesArr.forEach((value, index) => {
        const currentDate = new Date(value);
        const currentDateMiliSec = currentDate.getDate();
        if (todayMiliSec - currentDateMiliSec >= max) {
            max = todayMiliSec - currentDateMiliSec;
            max_i = index;
        }
    })
    return max_i;
}

function findOlderProduct2(datesArr) {
    const today = new Date();
    let max = 0;
    let max_valDate;
    const todayMiliSec = today.getTime();//today date in miliseconds
    datesArr.forEach(value => {
        const currentDate = new Date(value);
        const currentDateMiliSec = currentDate.getDate();
        if (todayMiliSec - currentDateMiliSec >= max) {
            max = todayMiliSec - currentDateMiliSec;
            max_valDate = value;
        }
    })
    return findVal(datesArr,max_valDate);
}


function findVal(datesArr,val){
    const dateIndex=datesArr.findIndex(value=>{return val==value});
    return dateIndex;
}



const arr = [5, -2, -3, 8, 0];
//console.log(onlyPos(arr))
//console.log(positiveArr(arr));



const datesArr = ['2025-03-17', '2025-03-25', '2025-04-23', '2025-02-17']
console.log(findOlderProduct2(datesArr))