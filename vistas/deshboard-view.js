import { Header, footer, Tareas, Informacion } from "../components/index.js";

const tareas = [
    {id: 1, titulo: "Tarea 1", fecha: "2025-07-31", estado: "pendiente",  fechaLimite: "2025-08-01" , integrantes: ["🐰", "🐻"],eliminar:"❌"},
    {id: 2, titulo: "Tarea 2", fecha: "2025-08-01", estado: "completada", fechaLimite: "2025-08-02", integrantes: ["👨‍💻", "👨‍🎓"],eliminar:"❌"},
    {id: 3, titulo: "Tarea 3", fecha: "2025-08-02", estado: "pendiente",  fechaLimite: "2025-08-03", integrantes: ["👨‍💻", "👨‍🎓"],eliminar:"❌"},
    {id: 4, titulo: "Tarea 4", fecha: "2025-08-03", estado: "pendiente",  fechaLimite: "2025-08-04",integrantes: ["👨‍💻", "👨‍🎓"],eliminar:"❌"},
    {id: 5, titulo: "Tarea 5", fecha: "2025-08-04", estado: "completada", fechaLimite: "2025-08-05" , integrantes: ["👨‍💻", "👨‍🎓"],eliminar:"❌"},
    {id: 6, titulo: "Tarea 6", fecha: "2025-08-05", estado: "pendiente",  fechaLimite: "2025-08-06",integrantes: ["👨‍💻", "👨‍🎓"],eliminar:"❌"}
];

export function deshboard() {
    let Dashboard = document.createElement("section");
    Dashboard.className = "secccion-1";

    Dashboard.appendChild(Header());

    let secccion = document.createElement("section");
    secccion.className = "secion-1";
    secccion.appendChild(Tareas(tareas));
    secccion.appendChild(Informacion(tareas));
    Dashboard.appendChild(secccion);

    Dashboard.appendChild(footer());
    return Dashboard;
}

const main = document.getElementById("deshboard");
if (main) {
    main.appendChild(deshboard());
}