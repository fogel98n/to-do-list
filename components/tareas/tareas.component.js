import { ItemTarea } from "../../modules/tarea/Item.Tarea.js";

export function Tareas(tareas){
    let ContenedorTareas = document.createElement("div");
    ContenedorTareas.className = "contenedor-tareas-seccion-1";
    
    tareas.forEach(tarea => {
        ContenedorTareas.appendChild(ItemTarea(
            tarea.titulo, 
            tarea.fecha, 
            tarea.estado, 
            tarea.id,
            tarea.fechaLimite, 
            tarea.integrantes,
            tarea.eliminar
        ));
    });
    return ContenedorTareas;
}