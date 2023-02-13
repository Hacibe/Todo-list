const checkComplte = (id) => {
    const i = document.createElement("i")
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener('click', (event) => compleTask(event, id));//con este le dices que al click haga lo que hace la función completetask
    return i;
};

const compleTask = (event, id) => { //al crear el evento este te dice en que etiqueta se localiza lo que buscas 
    const element= (event.target); //ya sabiendo le dices que sólo ese objeto quieres modificar 
    element.classList.toggle('fas'); //le dice pon mejor este icono 
    element.classList.toggle("completeIcon");//le agregas el color preestablecido 
    element.classList.toggle('far'); //y quita este 

    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex(item => item.id == id);// Esto hace que busque el item y seleccione sólo el id que es clickeado 
    tasks[index]["complete"]= !tasks[index]["complete"];// si está en falso, ala negarlo va a ser true y viceversa
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

export default checkComplte;