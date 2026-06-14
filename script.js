// EXECUTA FUNÇÕES QUANDO A PÁGINA CARREGA
document.addEventListener("DOMContentLoaded", () => {
    animarNumerosIBGE();
});

// 1. ANIMAÇÃO DE CONTADOR PARA OS DADOS DO IBGE
function animarNumerosIBGE() {
    const numeros = document.querySelectorAll('.numero-animado');
    
    numeros.forEach(numero => {
        const alvo = parseInt(numero.getAttribute('data-alvo'));
        let atual = 0;
        const incremento = alvo / 50; // Velocidade da animação

        const atualizarContador = () => {
            if (atual < alvo) {
                atual += incremento;
                numero.innerText = Math.ceil(atual);
                setTimeout(atualizarContador, 20);
            } else {
                numero.innerText = alvo;
            }
        };
        
        atualizarContador();
    });
}

// 2. LÓGICA DO SIMULADOR DA FAZENDA SUSTENTÁVEL
function calcularSustentabilidade() {
    // Captura os valores selecionados nos formulários
    const p1 = parseInt(document.getElementById('p1').value);
    const p2 = parseInt(document.getElementById('p2').value);
    const p3 = parseInt(document.getElementById('p3').value);
    
    const notaTotal = p1 + p2 + p3;
    
    const resultadoDiv = document.getElementById('resultado');
    const notaValor = document.getElementById('nota-valor');
    const notaMensagem = document.getElementById('nota-mensagem');
    
    // Altera o texto do valor da nota
    notaValor.innerText = notaTotal;
    
    // Determina o feedback lúdico baseado na nota obtida
    if (notaTotal >= 25) {
        resultadoDiv.style.backgroundColor = "#e8f5e9"; // Verde claro
        resultadoDiv.style.border = "2px solid #2e7d32";
        notaMensagem.innerText = "Excelente! Sua propriedade fictícia é um modelo de sustentabilidade. Você consegue produzir forte protegendo o futuro!";
    } else if (notaTotal >= 15) {
        resultadoDiv.style.backgroundColor = "#fff3e0"; // Laranja claro
        resultadoDiv.style.border = "2px solid #ff9800";
        notaMensagem.innerText = "Bom caminho! Sua fazenda produz bem, mas pequenos ajustes na preservação podem torná-la ainda mais equilibrada.";
    } else {
        resultadoDiv.style.backgroundColor = "#ffebee"; // Vermelho claro
        resultadoDiv.style.border = "2px solid #c62828";
        notaMensagem.innerText = "Atenção! Sua produção pode estar prejudicando o ecossistema. Lembre-se que equilibrar com a natureza protege seu próprio solo!";
    }
    
    // Torna a div visível aplicando a classe CSS correspondente
    resultadoDiv.className = "resultado-visivel";
}