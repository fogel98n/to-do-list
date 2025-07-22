export function deshboard(){
    const deshboard=document.getElementById("deshboard")
    let section=document.createElement("section");
    section.className="deshboard";

    let h1=document.createElement("h1");
    h1.textContent="Deshboard";
    section.appendChild(h1);

    return section

}
document.body.appendChild(deshboard());