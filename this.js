// function hi(){
//     console.log(this);
// }
// hi();

const hello=()=>{
    console.log(this);
}
hello();


// Optional chaining 

const obj = {
    name: "Pollob",
    id: 18,
    add:{
        city:'madhabpur',
        dist:'habiganj',
    }
}
console.log('Hii Pollob');
console.log( obj.add.city.country?.global);
console.log("Hello");