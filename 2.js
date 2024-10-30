const evenOdd = (x) =>
{
    if (x%2 == 0) return true;
    else return false;
}
let x = 10
if (evenOdd(x)){
    console.log("Even");
}
else console.log("Odd");