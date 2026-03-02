const showTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      todoList(data);
    });
};
// completed: false;
// id: 7;
// title: "illo expedita consequatur quia in";
// userId: 1;
const todoList = (todos) => {
  console.log(todos);
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    console.log(todo);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class ="todo-card" {
        constructor(parameters) {
            
        }
    }>
    <h2>${todo.completed === true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}   </h2>
    <h2>${todo.title}</h2>
    </div>
    
    `;
    todoContainer.appendChild(div);
  });
};
showTodo();
