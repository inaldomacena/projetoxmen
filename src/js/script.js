

// Objetivo 1- quando passar o mouse em cima do personagem, devemos seleciona-lo
/* Passo 1- pegar os personagens no JS para poder verificar quando o usuario passar o mouse em cima de um deles*/

const personagens = document.querySelectorAll('.personagem');

// Passo 2 - adicionar a classe selecionado no personagemque o usuario passar o cursos do mouse 

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {


        //Passo 3 - verificar e já  exista um personagem elecionado, se sim, devemos remover a seleção dele

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')



        personagem.classList.add('selecionado');



        // Objetivo 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        // Passo 1 - Pegar o elemento do personagem grande para adicionar as informações nele


        const imagemPersonagemGrande = document.querySelector('.personagem-selecionado');

        // Passo 2 - Alterar  a imagem  do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `/src/imagens/card-${idPersonagem}.png`;

        //Passo 3 - Alterar o nome do personagem grande

        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //Passo 4 - Alterar a descrição do personagem grande
        
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');



    })
})




