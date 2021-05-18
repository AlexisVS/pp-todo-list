let ul = document.querySelector('ul');
let input = document.querySelector('input').value;
let button = document.querySelector('button')
let add = () => {
    let input = document.querySelector('input').value;
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let button = document.createElement("button");
    button.classList.add("bg-transparent", "border-none", 'text-blue-900', "mx-10");
    button.innerText = "supprimer";
    li.classList.add("text-gray-200", "text-3xl", "flex", "justify-between", "my-2", "bg-blue-500", "p-5");
    li.innerText = input;
    li.append(button);
    input.innerText = input;
    return ul.append(li);
}

document.querySelector('ul').addEventListener("click", e => {
    let li;
    li = document.getElementsByTagName("li");
    if (e.explicitOriginalTarget.localName == "button") {
        e.originalTarget.parentElement.remove()
    }
})