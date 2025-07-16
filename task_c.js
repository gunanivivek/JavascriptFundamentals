let arr = [2,4,90,6,7,8,];
const sumofNos = (arr) => {
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum
}
console.log(sumofNos(arr));
