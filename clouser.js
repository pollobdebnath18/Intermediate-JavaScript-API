const outerFunction=()=>{
    let x=3;
    let innerFunction=()=>{
        if(x>0){
            x--;
            console.log("X is greater than",x);
        }
        else{
            console.log("X is zero");
        }
    }
    return innerFunction;
}
const output = outerFunction();
output();
output();
output();
output();
const out = outerFunction();
out();