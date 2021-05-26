export let init = () => {
    initDom();
    addTodoItems();
    fctTodoItems();
}

let initDom = () => {
    let app = document.createElement('div');
    app.id = "app";
    app.className = 'mx-auto pt-10 w-full flex flex-col justify-center'

    let todoHeader = document.createElement('div')
    todoHeader.id = "todoHeader"
    todoHeader.className = "flex justify-center w-full"

    let inputToDo = document.createElement('input');
    inputToDo.id = "inputTodo";
    inputToDo.className = "w-8/12 mr-8 bg-green-500 text-2xl text-white pl-3"

    let buttonToDo = document.createElement('button');
    buttonToDo.id = "buttonTodo";
    buttonToDo.innerHTML = "Ajouter";
    buttonToDo.className = "text-green-500 p-2 text-2xl border border-green-500"

    let toDoList = document.createElement('ul');
    toDoList.id = "todoList";
    toDoList.className = 'w-full flex flex-col justify-center mt-8';
    todoHeader.prepend(inputToDo, buttonToDo)
    app.prepend(todoHeader, toDoList)
    document.body.append(app)
}

let addTodoItems = () => {
    // ! Alterner entre input:disabled et l'autre
    let toDoList = document.querySelector('#todoList');
    let buttonToDo = document.querySelector('#buttonTodo');
    let inputToDo = document.querySelector('#inputTodo');
    buttonToDo.addEventListener("click", () => {
        let todoItem, btnFinish, btnModify, btnDelete, todoItemBtns, text;
        if (inputToDo.value != "") {
            inputToDo = document.querySelector('#inputTodo');
            todoList = document.querySelector('#todoList');

            todoItem = document.createElement('li');
            todoItem.type = "text"
            todoItem.className = "inline-flex justify-between w-11/12 px-3 py-2 mx-auto mb-1 bg-gray-800";
            // todoItem.innerText = inputToDo.value; // ! j'ai changer ça et ça bug avant il etait a innerHTML

            text = document.createElement('input')
            text.className = "text-2xl text-blue-200 border-none bg-transparent";
            text.value = inputToDo.value
            text.readOnly = true;
            


            btnFinish = document.createElement('button')
            btnFinish.innerHTML = "✔"

            todoItemBtns = document.createElement('div');
            todoItemBtns.className = 'order-2';

            btnModify = document.createElement('button');
            btnModify.innerHTML = "✏";

            btnDelete = document.createElement('button');
            btnDelete.className = "";
            btnDelete.innerHTML = "❌";

            todoItemBtns.prepend(btnModify, btnDelete);

            todoItem.prepend(btnFinish, text, todoItemBtns);
            toDoList.append(todoItem);
        }
    })
}

let archiver = (element, index, eventItem) => {

}

let fctTodoItems = () => {

    document.body.addEventListener("click", item => {
        // ! indexOf     par le bas pour supprimer
        switch (item.target.innerHTML) {
            case "❌":
                item.target.parentNode.parentNode.remove();
                break;

            case "✏":
                if (item.target.parentNode.parentNode.children[1].readOnly == true) {
                    item.target.parentNode.parentNode.children[1].readOnly = false
                    item.target.parentNode.parentNode.classList.add("bg-gray-500")
                    item.target.parentNode.parentNode.classList.remove("bg-gray-800")
                } else {
                    item.target.parentNode.parentNode.children[1].readOnly = true
                    item.target.parentNode.parentNode.classList.add("bg-gray-800")
                    item.target.parentNode.parentNode.classList.remove("bg-gray-500")
                }
                break;
        }
    })
}