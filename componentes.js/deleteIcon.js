import { displayTask } from "./readTasks.js"; //para que lo elimine de la pantalla 
const deleteIcon = (id) =>{
    const i =document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", () => deleteTask(id));
    return i 
};

const deleteTask = (id) =>{
    const li = document.querySelector("[data-list]");//SEVUELVE A SELCCIONAR LA LISTa
    const tasks =  JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex ((item)=> item.id == id);
    tasks.splice(index,1);//el splice hace que se elimine el ELEMENTO DENTRO DEL ARREGLO que buscas, las veces que le indiques 
    li.innerHTML = "";//a la lista se le dice que quede en blanco 
    localStorage.setItem("tasks", JSON.stringify(tasks));//aquí vuelves a actualizar el local Storage 
    displayTask();// y se vuelve a llamar esta función para que muestre las tareas que existen 
};

export default deleteIcon;

//trabajar en rensponsive y en que se agrupe por hora 