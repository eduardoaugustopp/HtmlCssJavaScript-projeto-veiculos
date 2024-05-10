function calcularValorTotalDeCarrosDisponiveis(carros) {
    const total = carros.reduce((acc, carro) => acc + carro.preco, 0);
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
}
