import { Header, footer,Tareas,Informacion} from "../components/index.js";

export function deshboard() {
    let Dashboard = document.createElement("section");
    Dashboard.className = "secccion-1";

    Dashboard.appendChild(Header());

    let secccion=document.createElement("section");
    secccion.className = "secion-1";
    secccion.appendChild(Tareas());
    secccion.appendChild(Informacion());
    Dashboard.appendChild(secccion);

    Dashboard.appendChild(footer());
    return Dashboard;
}

const main = document.getElementById("deshboard");
if (main) {
    main.appendChild(deshboard());
}