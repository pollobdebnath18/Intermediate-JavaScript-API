// Rest operator
function demo(a,b,c, ...others){
    console.log(a,b,c,others);
}
demo(1,2,3,4,5,6,7);

// spreed operator

const demo1={
    name:'Pollob',
    id:78,
}
const tmp = {...demo1};
demo1.name='Alice'
console.log(tmp);