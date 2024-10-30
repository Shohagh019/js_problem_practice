const monthlySavings =(arr, x)=>{
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        if(arr[i]>=3000){
            sum+=(arr[i]-(arr[i]*20/100));
        }
        else sum+=arr[i];
    }
    let savings = sum-x;
    if(savings>= 0) return savings;
    else return 'Earn More'

}

console.log(monthlySavings([900,2700,3400], 10000));