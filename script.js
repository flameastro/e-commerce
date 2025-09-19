function clicarBotao() {
    const botoes = document.querySelectorAll("button")
    
    for (let botao of botoes) {
        botao.addEventListener("click", () => {
            alert("Produto comprado com sucesso!")
        })
    }
}

clicarBotao()
