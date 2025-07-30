import { Header,footer } from "../components/index.js"; 
export function deshboard(){
    let section=document.createElement("section");
    section.appendChild(Header());
    section.appendChild(footer());

    return section;
}

const main = document.getElementById("deshboard");
if (main) {
    main.appendChild(deshboard());
}