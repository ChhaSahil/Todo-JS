// You can start writing your code below

// You can start writing your code below

const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("input");
const todoCollection = document.querySelector(".todo-collection");

todoForm.addEventListener("submit",addTodo);

function addTodo(e) {
    if (todoInput.value === "") {
        //alert !!!!
        alert("Please Enter Something");
    }
    else{
        const li =document.createElement("li");
        const todoTitle = document.createElement("span");
        const editableInput = document.createElement("input");
        const saveButton = document.createElement("button");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        
        li.classList.add("todo-collection_item");
        todoTitle.classList.add("todo-collection_itm_title");
        todoTitle.innerText = todoInput.value;
        editableInput.classList.add("input");
        editableInput.classList.add("input--todo");
        editableInput.classList.add("hidden");
        editableInput.type = "text";
        editableInput.value = todoInput.value;
        editButton.classList.add("button");
        editButton.classList.add("button--todo");
        editButton.classList.add("button--edit");
        editButton.innerText = "Edit";

        saveButton.classList.add("button");
        saveButton.classList.add("button--todo");
        saveButton.classList.add("button--save");
        saveButton.classList.add("hidden");
        saveButton.innerText = "Save";

        deleteButton.classList.add("button");
        deleteButton.classList.add("button--todo");
        deleteButton.classList.add("button--delete");
        deleteButton.innerText  = "Delete";

        li.appendChild(todoTitle);
        li.appendChild(editableInput);
        li.appendChild(editButton);
        li.appendChild(saveButton);
        li.appendChild(deleteButton);
        todoCollection.appendChild(li);

        function toggleTodoEditForm(){
            todoTitle.classList.toggle("hidden");
            editableInput.classList.toggle("hidden");
            editButton.classList.toggle("hidden");
            saveButton.classList.toggle("hidden");
        }

        editButton.addEventListener("click",() =>{
            toggleTodoEditForm();
            editableInput.focus();
        });
        saveButton.addEventListener("click",()=>{
            todoTitle.innerText = editableInput.value;
            toggleTodoEditForm();
        });
        deleteButton.addEventListener("click",()=> {
            setTimeout(()=>{
                todoCollection.removeChild(li);
            },100);

        });
    }
    todoInput.value = "";
    e.preventDefault();
}
    function getTodosFormLS(){
        let todos;
        if(localStorage.getItem("todos") === null){
            todos=[];
        }
        else{
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        todos.forEach(todo=>{
            const li = document.createElement("li");
            const todoTitle = document.createElement("span");
            const saveButton = document.createElement("button");
            const deleteButton = document.createElement("button");
            const editButton = document.createElement("button");

            li.classList.add("todo-collection_item");

            todoTitle.classList.add("todo-collection_item_title");
            todoTitle.inputText = todoInput.value;

            editableInput.classList.add("input");
            editableInput.classList.add('input--todo');
            editableInput.classList.add("hidden");
            editableInput.type = "text";
            editableInput.value = todoInput.value;

            editButton.classList.add("button");
            editButton.classList.add("button--todo");
            editButton.classList.add("button--edit");
            editButton.inputText = "Edit";

            saveButton.classList.add("button");
            saveButton.classList.add("button-todo");
            saveButton.classList.add("button--save");
            saveButton.classList.add("hidden");
            saveButton.innerText = "Save";

            deleteButton.classList.add("button");
            deleteButton.classList.add("button--todo");
            deleteButton.classList.add("button--delete");
            deleteButton.innerText = "Delete";

            li.appendChild(todoTitle);
            li.appendChild(editableInput);
            li.appendChild(editButton);
            li.appendChild(saveButton);
            li.appendChild(deleteButton);

            todoCollection.appendChild(li);

            function toggleTodoEditForm(){
                todoTitle.classList.toggle("hidden");
                editableInput.classList.toggle("hidden");
                editButton.classList.toggle("hidden");
                saveButton.classList.toggle("hidden");
            }
            editButton.addEventListener("click",()=>{
                toggleTodoEditForm();
                editableInput.focus();
            });
            saveButton.addEventListener("click",()=>{
                todoTitle.innerText = editableInput.value;
                toggleTodoEditForm;

            });
            deleteButton.addEventListener("click",()=>{
                setTimeout(()=>{
                    todoCollection.removeChild(li);
                    
                },100
                );
            });

        });
    }
    function saveTodoToLS(){
        let todos;
        todos=localStorage.getItem("todos")==="null" ?[]:JSON.parse(localStorage.getItem("todos"));
        todos.push(todoInput.value);
        localStorage.setItem("todos",JSON.stringify(todos));
    }
    function deleteTodoFromLS(){
        let todos;
        todos = localStorage.getItem("todos")==="null"?[]:JSON.parse(localStorage.getItem("todos"));

    }
    function updateTodoInLS(){
        let todos;
        todos = localStorage.getItem("todos")==="null"?[]:
        JSON.parse(localStorage.getItem("todos"));
    }
