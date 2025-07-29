import { Header } from "../components/header/header-component.js";
export function deshboard(){
    let section=document.createElement("section");
    section.appendChild(Header());
    return section;
}

const main = document.getElementById("deshboard");
if (main) {
    main.appendChild(deshboard());
}