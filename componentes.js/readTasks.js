import { createTask } from "./addTask.js";
import  dateElement  from "./agrupar.js";
import { uniqueDates, orderDates } from "../services/date.js";

export const displayTask = () => {
    const list = document.querySelector("[data-list");

    const tasksList = JSON.parse(localStorage.getItem ("tasks")) || [];
    const dates = uniqueDates(tasksList);
    orderDates(dates);
    dates.forEach(date =>{
        const dateMoment = moment(date, "DD/MM/YYYY");//Esto es para indicar si se agrega o no al grupo de fecha pero con un método de moment
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat,"DD/MM/YYYY");
            
            const diff = dateMoment.diff(taskDate);//para que distinga la diferencia entre los parametros de las fechas
            if(diff== 0 ){
                list.appendChild(createTask(task));//de todos modos lo esta regresando en addTask
            }
        });
    });

    

};