//keys , values , entries
const object = {name:"alice",age:20,city:'sylhet'};
const keys = Object.keys(object);
const values  = Object.values(object);
const entries = Object.entries(object);
console.log(keys);
console.log(values);
console.log(entries);

//freeze , seel
// Object.freeze(object);
Object.seal(object)


//delete , add ,update

delete object.name;
object.isMarried = 'true';
object.age=50;
console.log(object);


