function sumArrays(arr1,arr2){
    let smallArray,bigArray;
    smallArray=arr1.length<arr2.length?arr1:arr2;
    bigArray=arr1.length>arr2.length?arr1:arr2;
    let newArr=[];
    smallArray.forEach((value,index) => {
        const newVal=value+bigArray[index];
        newArr.push(newVal);
    });
    newArr.push(bigArray)
}