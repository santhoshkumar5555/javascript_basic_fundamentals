// // 1. save a data

// const todolist = [{ 
//   name:'make dinner',
//   dueDate:'2022-12-12'
// },{
//  name:'wash dishes',
//  dueDate:'2024-12-12'
// }];


//   // steps (Algorithm)
//   // 1 loop through the array
//   // 2 create some html code for each todo
//   // 3 put the html on webpage

//   renderTodoList();
//   // genearting HTML with javascript
//   // 1 save a data
//   // 2 generate the html
//   // 3 make it inderactive

//   function renderTodoList (){
//   let todolistHTML = '';

//   for(let i =0; i<todolist.length;i++){

//   const todoObject = todolist[i];
//   // const name = todoObject.name;
//   // const duedate = todoObject.duedate;

//   const { name,dueDate } = todoObject;

//   const html =`
  
//     <div>${name}</div>
//     <div> ${dueDate}</div>
//     <button onclick ="
//       todolist.splice(${i}, 1);
//       renderTodolist();
//     " class ="delete-todo-button">Delete</button>
//     `;
//   todolistHTML += html;
// }


// document.querySelector('.js-todo-list').innerHTML = todolistHTML;
//   }

//   function AddTodo(){

//     const inputElement = document.querySelector('.js-name-input');
//     const name = inputElement.value;

//     const dateInputelement =document.querySelector('js-due-date-input');
//     const dueDate = dateInputelement.value;
  
  
//     todolist.push({
//     // name: name ,
//     // duedate: duedate,
//     name,
//     dueDate
//   });
  
  
//   inputElement.value = '';
//    // 3 make it inderactive
//   renderTodoList();
// }

const todolist = [
  { name: 'make dinner', dueDate: '2022-12-12' },
  { name: 'wash dishes', dueDate: '2024-12-12' }
];

renderTodoList();

function renderTodoList() {
  let todolistHTML = '';

  for (let i = 0; i < todolist.length; i++) {
    const { name, dueDate } = todolist[i];

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todolist.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;

    todolistHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

function AddTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todolist.push({ name, dueDate });

  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
}
