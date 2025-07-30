export function footer(){
    let footer=document.createElement("footer")
    footer.className="footer"

    let titulo_footer = document.createElement("p")
    titulo_footer.className="titulo-footer"
    titulo_footer.textContent="@fogel98nex"

    footer.appendChild(titulo_footer)
    return footer
}