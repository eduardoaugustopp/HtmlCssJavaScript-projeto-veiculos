const botoes = document.querySelectorAll(".botao");
const motos = document.querySelectorAll(".moto");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarMoto();

		botao.classList.add("selecionado");
		motos[indice].classList.add("selecionado");
	});
});

function desselecionarMoto() {
	const motoSelecionado = document.querySelector(".moto.selecionado");
	motoSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}
