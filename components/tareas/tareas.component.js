import { ItemTarea } from "../../modules/Item.Tarea.js";
let tareas = [
    {id: 1, titulo: "Tarea 1", fecha: "2025-07-31", estado: "pendiente",  fechaLimite: "2025-08-01" , integrantes: ["🐰", "🐻"],eliminar:"❌"},
    {id: 2, titulo: "Tarea 2", fecha: "2025-08-01", estado: "completada", fechaLimite: "2025-08-02", integrantes: ["👨‍💻", "👨‍🎓"],eliminar:"❌"},
    {id: 3, titulo: "Tarea 3", fecha: "2025-08-02", estado: "pendiente",  fechaLimite: "2025-08-03", integrantes: ["👨‍💻", "👨‍🎓"],eliminar:"❌"},
    {id: 4, titulo: "Tarea 4", fecha: "2025-08-03", estado: "pendiente",  fechaLimite: "2025-08-04",integrantes: ["👨‍💻", "👨‍🎓"],eliminar:"❌"},
    {id: 5, titulo: "Tarea 5", fecha: "2025-08-04", estado: "completada", fechaLimite: "2025-08-05" , integrantes: ["👨‍💻", "👨‍🎓"],eliminar:"❌"},
    {id: 6, titulo: "Tarea 6", fecha: "2025-08-05", estado: "pendiente",  fechaLimite: "2025-08-06",integrantes: ["👨‍💻", "👨‍🎓"],eliminar:"❌"}
];

export function Tareas(){
    let ContenedorTareas = document.createElement("div");
    ContenedorTareas.className = "contenedor-tareas-seccion-1";
    
    tareas.forEach(tarea => {
        ContenedorTareas.appendChild(ItemTarea(tarea.titulo, tarea.fecha, tarea.estado, tarea.id,tarea.fechaLimite, tarea.integrantes,tarea.eliminar));
    });
    return ContenedorTareas;
}