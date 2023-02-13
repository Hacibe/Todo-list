import { uniqueDates } from "../services/date.js";
import checkComplte from "./checkComplte.js";
import deleteIcon from "./deleteIcon.js";
import { displayTask } from "./readTasks.js";

export const addTask = (evento) => { //el evento genera el formulario
    evento.preventDefault();

    const list = document.querySelector("[data-list]");//donde se agregaran las tareas
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");

    const value = input.value;//para que saque el valor de esa constante
    const date = calendar.value;
    const dateFormat = (moment(date).format("DD/MM/YYYY"));//moment es la librería que le da el formato a la fecha
    
    if(value == "" || date == ""){
        console.log("no no no ")
        return;
    }; //valida que ambos tengan datos sino no te deja agregar nada 

    input.value = "";
    calendar.value = ""; //para que cada vez que le des refresh no se quede la fecha o el input

    const complete = false

    const taskObj = { //generas un objeto donde se guardane estas variables
        value,
        dateFormat,
        complete, 
        id: uuid.v4(), //estas llamando a la libería para que le ponga un id único
    };

    list.innerHTML = "";

    const taskList=JSON.parse(localStorage.getItem("tasks")) || []; //le decimos que si esta con datos Local Storage que actue de esa froma O/OR (que se llaman pipe) si esta vació que empiece con un arreglo vacío
    taskList.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(taskList));//volver a almacenar y convertirlo en string para html

    displayTask();

};//Para que solo agregue la tarea a la lista de tareas.



export const createTask = ({value, dateFormat, complete, id}) => {  //destructuración del objeto siciendole los valores que sólo necesitas 
    const task = document.createElement("li"); //aquí le digo que cree un elemento li
    task.classList.add("card"); //aquí le estoy dando el formato de la clase card
    
    const taskcontent = document.createElement("div"); //se crea elemento div
   
    const check = checkComplte(id);
    if (complete){//sobre escribimos las clases de check complete para que las marque y guarde
        check.classList.toggle('fas'); //le dice pon mejor este icono 
        check.classList.toggle("completeIcon");//le agregas el color preestablecido 
        check.classList.toggle('far'); //y quita este 
    };

    const titleTask = document.createElement("span"); //se crea el titulo de la lista
    titleTask.classList.add("task"); //se mete dentro del formato de la clase task
    titleTask.innerText= value; // se mete el input dentro del título y formato
    taskcontent.appendChild(check); //se mete dentro de ese elemento el checkmark 
    taskcontent.appendChild(titleTask); //se agrega el título con formato y todo dentro del appendchild
    
    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;

    task.appendChild(taskcontent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon(id));
    return task;
};

