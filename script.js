function botaoCompra() {
    const botoes = document.querySelectorAll("button.product-buy-button");
    
    for (let botao of botoes) {
        botao.addEventListener("click", () => {
            alert("Produto comprado com sucesso!");
        })
    }
}

botaoCompra();

function botaoMais() {
    const botao = document.querySelector("button#more");

    botao.addEventListener('click', () => {
        alert("Saindo...");
        window.location.reload() ;
    })
}

botaoMais();
