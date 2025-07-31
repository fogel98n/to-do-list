export function ItemTarea(titulo, fecha, estado,id,fechaLimite,integrantes,eliminar) {
    let contenedorItemTarea = document.createElement("div");
    contenedorItemTarea.className = "contenedor-item-tarea";

    const idElem = document.createElement("p");
    idElem.className = "item-tarea-id";
    idElem.textContent = ` ${id}`;
    contenedorItemTarea.appendChild(idElem);

    const tituloElem = document.createElement("h3");
    tituloElem.className = "item-tarea-titulo";
    tituloElem.textContent = titulo;
    contenedorItemTarea.appendChild(tituloElem);

    const botonEstado = document.createElement("div");
    botonEstado.className = "item-tarea-boton-estado";
    botonEstado.textContent = estado;
    botonEstado.disabled = true;
    contenedorItemTarea.appendChild(botonEstado);

    const fechaElem = document.createElement("p");
    fechaElem.className = "item-tarea-fecha";
    fechaElem.textContent = `Fecha: ${fecha}`;
    contenedorItemTarea.appendChild(fechaElem);

    const fechaLimiteElem = document.createElement("div");
    fechaLimiteElem.className = "item-tarea-fecha-limite";
    fechaLimiteElem.textContent = `Fecha Límite: ${fechaLimite}`;
    contenedorItemTarea.appendChild(fechaLimiteElem);

    const integrantesElem = document.createElement("div");
    integrantesElem.className = "item-tarea-integrantes";
    integrantesElem.textContent = ` ${integrantes.join(" ")}`;
    contenedorItemTarea.appendChild(integrantesElem);

    const eliminarElem = document.createElement("button");
    eliminarElem.className = "item-tarea-eliminar";
    eliminarElem.textContent = eliminar;
    eliminarElem.addEventListener("click", () => {
        contenedorItemTarea.remove();
    });
    contenedorItemTarea.appendChild(eliminarElem);

    return contenedorItemTarea;
}