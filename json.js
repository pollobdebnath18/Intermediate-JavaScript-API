const person = {
  name: "pollob",
  id: 78,
  age: 23,
  city: "Sylhet",
  profession: "Student",
};
console.log(person);
//convert object to json
const parseJson = JSON.stringify(person);
console.log(parseJson);

//convert json to object
const objectData = JSON.parse(parseJson);
console.log(objectData);

function loadData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        tmp(data)
    });
}
function tmp(data){
   data.forEach(item=>{
    console.log(item);
   })
}
