async function buscarMensagem() {

    const resultado = document.getElementById('resultado');

    try {
        resultado.innerText = 'Carregando...';

        const resposta = await fetch(
            'http://localhost:3000/api/mensagem'
        );

        if (!resposta.ok) {
            throw new Error('Erro HTTP: ' + resposta.status);
        }

        const dados = await resposta.json();

        resultado.innerText = dados.mensagem;

    } catch (erro) {
        resultado.innerText = 'Erro ao buscar os dados.';
        console.error(erro);
    }
}

document.getElementById('botao').addEventListener('click', () => {
    buscarMensagem();
});
