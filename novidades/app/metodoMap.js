function aplicarDesconto(carros) {
    const desconto = 0.06
    carrosComDesconto = carros.map(carro => {
        return {...carro, preco: carro.preco - (carro.preco * desconto)}
    })
    return carrosComDesconto
}