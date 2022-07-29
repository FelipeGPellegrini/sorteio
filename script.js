function sorteio() {
    let ns = Math.round(Math.random() * 100) 
    let n  = document.getElementById("numero")

    document.getElementById("as").style.display = "block"

    n.innerHTML = ns

    
}