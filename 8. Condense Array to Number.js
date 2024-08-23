function condenseArrayToNumber(arr) {
    if (arr.length ===1){
        console.log(arr[0]);
        return
    }
    let final = []
    for(let i = 0; i<arr.length-1; i++){
        arr[i]=Number(arr[i])+Number(arr[i+1]);   
        final.push(arr[i])
    }
let sum=0
for (let j=0; j<final.length-1; j++){
    sum+= Number(final[j])+Number(final[j+1])
}
console.log(sum);

}
condenseArrayToNumber ([5,0,4,1,2])