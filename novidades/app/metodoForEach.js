const elementoParaInserirCarros = document.getElementById('carros')
const elementoComValorTotalDeCarrosDisponiveis = document.getElementById('valor_total_carros_disponiveis')

function exibirOsCarrosNaTela(listaDeCarros) {
  elementoComValorTotalDeCarrosDisponiveis.innerHTML = ''
  elementoParaInserirCarros.innerHTML = ''
  listaDeCarros.forEach(carro => {
    let disponibilidade = carro.quantidade > 0 ? 'carro__imagens' : 'carro__imagens indisponivel' 
      elementoParaInserirCarros.innerHTML += `
      <div class="carro">
      <img class="${disponibilidade}" src="${carro.imagem}"
        alt="${carro.alt}" />
      <h2 class="carro__titulo">
        ${carro.titulo}
      </h2>
      <p class="carro__descricao">${carro.autor}</p>
      <p class="carro__preco" id="preco">R$${carro.preco.toLocaleString('pt-BR', { minimumFractionDigits: 3 })}</p>
      <div class="tags">
        <span class="tag">${carro.categoria}</span>
      </div>
    </div>
      `
  })
}