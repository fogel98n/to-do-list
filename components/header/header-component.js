export function Header() {
  const header = document.createElement("header");
  header.className = "header";

  const titulo = document.createElement("h2");
  titulo.className = "titulo";
  titulo.textContent = "to-do-list";
  header.appendChild(titulo);

  const taresPendientes = document.createElement("p");
  taresPendientes.className = "contenedor-tareas";
  taresPendientes.textContent = "Tareas pendientes: 0";
  header.appendChild(taresPendientes);

  return header;
}