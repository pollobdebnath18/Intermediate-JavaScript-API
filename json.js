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

//loadData
function loadData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      tmp(data);
    });
}
function tmp(data) {
  data.forEach((item) => {
    console.log(item);
  });
}

//load data2
const loadData2 = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayPosts(data);
    });
};
const displayPosts = (posts) => {
  const postsContainer = document.getElementById("post-container");
  postsContainer.innerHTML = "";
  posts.forEach((post) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="post-card">
        <h2>
         ${post.title}
        </h2>
        <p>
          ${post.body}
        </p>
      </div>
    `;
    postsContainer.appendChild(div);
  });
};
