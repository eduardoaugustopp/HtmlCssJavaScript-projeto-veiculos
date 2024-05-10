const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarCarros))

function filtrarCarros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let carrosFiltrados = categoria == 'disponivel' ? filtraPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirOsCarrosNaTela(carrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeCarrosDisponiveis(carrosFiltrados)
        
        exibirValorTotalDeCarrosDisponiveisNaTela(valorTotal)
    }
    
}

function filtrarPorCategoria(categoria) {
    return carros.filter(carro => carro.categoria == categoria)
}

function filtraPorDisponibilidade() {
    return carros.filter(carro => carro.quantidade > 0)
}

function exibirValorTotalDeCarrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeCarrosDisponiveis.innerHTML = `
        <div class="carros__disponiveis">
        <p>Valor total dos carros disponíveis R$ <span id="valor">${valorTotal}</span></p>
        </div>
          `
}