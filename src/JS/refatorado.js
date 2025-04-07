// Seleciona todos os botões de personagens e os elementos de personagens
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

/**
 * Remove a classe "selecionado" do botão atualmente selecionado
 */
function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}

/**
 * Marca o botão clicado como selecionado
 * @param {Element} botao - O botão clicado
 */
function marcarBotao(botao) {
    botao.classList.add('selecionado');
}

/**
 * Remove a classe "selecionado" do personagem atualmente visível
 */
function esconderPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}

/**
 * Exibe o personagem correspondente ao botão clicado
 * @param {number} indice - Índice do botão clicado na lista
 */
function mostrarPersonagem(indice) {
    personagens[indice].classList.add('selecionado');
}

/**
 * Função principal que configura os eventos de clique nos botões
 */
function inicializarEventos() {
    botoes.forEach((botao, indice) => {
        botao.addEventListener("click", () => {
            // Objetivo 1: Atualizar seleção do botão
            desmarcarBotaoSelecionado();
            marcarBotao(botao);

            // Objetivo 2: Mostrar personagem correspondente
            esconderPersonagemSelecionado();
            mostrarPersonagem(indice);
        });
    });
}

// Inicializa a aplicação
inicializarEventos();
