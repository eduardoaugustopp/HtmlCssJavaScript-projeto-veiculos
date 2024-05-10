let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdenarPorPreco.addEventListener('click', ordenarCarrosPorPreco)

function ordenarCarrosPorPreco() {
    let lirvosOrdenados = carros.sort((a, b) => a.preco - b.preco)
    exibirOsCarrosNaTela(lirvosOrdenados)
}