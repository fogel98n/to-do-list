export function Informacion(tareas){
    let ContenedorInformacion = document.createElement("section");
    ContenedorInformacion.className="Conrtenedor-Informacion"

    // Header de botones (se mantiene igual)
    const botonesHeader = document.createElement("div");
    botonesHeader.className = "botones-header";

    const btn1=document.createElement("button")
    btn1.className="btn-1"
    btn1.textContent="+ tarea"
    botonesHeader.appendChild(btn1)

    const btn2=document.createElement("button")
    btn2.className="btn-2"
    btn2.textContent="archivados"
    botonesHeader.appendChild(btn2)

    ContenedorInformacion.appendChild(botonesHeader);

    // Card de información de la tarea
    if (tareas.length > 0) {
        const tarea = tareas[0];
        const card = document.createElement("div");
        card.className = "info-tarea-card";

        // Badge de estado
        const badge = document.createElement("span");
        badge.className = `badge-estado ${tarea.estado === "completada" ? "completado" : "pendiente"}`;
        badge.textContent = tarea.estado === "completada" ? "completado" : "pendiente";
        card.appendChild(badge);

        // Título
        const tituloElem = document.createElement("h3");
        tituloElem.className = "info-tarea-titulo";
        tituloElem.textContent = tarea.titulo;
        card.appendChild(tituloElem);

        // Descripción
        const descripcionElem = document.createElement("p");
        descripcionElem.className = "info-tarea-descripcion";
        descripcionElem.textContent = tarea.descripcion || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.";
        card.appendChild(descripcionElem);

        // Integrantes
        const integrantesLabel = document.createElement("div");
        integrantesLabel.className = "info-tarea-integrantes-label";
        integrantesLabel.textContent = "Integrantes";
        card.appendChild(integrantesLabel);

        const integrantesElem = document.createElement("div");
        integrantesElem.className = "item-tarea-integrantes";
        tarea.integrantes.forEach(emoji => {
            const span = document.createElement("span");
            span.className = "item-tarea-integrante";
            span.textContent = emoji;
            integrantesElem.appendChild(span);
        });
        card.appendChild(integrantesElem);

        ContenedorInformacion.appendChild(card);
    }

    return ContenedorInformacion;
}