const vec1=[1,6,8,7,1],vec2=[5,8,9,6];
const newstring=(arr1,arr2)=>{
const smallarr=arr1.length<arr2.length?arr1:arr2;
const bigarr=arr1.length>arr2.length?arr1:arr2;
let st="";
let index;
smallarr.forEach((value,i) => {
    st+=(value+bigarr[i])+"-";
    index=i;
});

}




