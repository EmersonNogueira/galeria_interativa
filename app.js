let galeria = document.getElementById('galeria');
let inicio = document.getElementById("inicio");
let campoPesquisa = '';
let filtro = document.getElementById("");
let favoritos = [];

// Função para carregar a galeria com base no filtro
function carregarGaleria(filtro = '') {
    inicio.innerHTML = ``;
    let aux = '';
    galeria.innerHTML = '';

    for (let obra of obras) {
        if (obra.categoria.includes(filtro) || filtro === '') {
            // Verifica se o campo de pesquisa não está vazio e se a obra corresponde à pesquisa
            if (campoPesquisa === '' || obra.titulo.toLowerCase().includes(campoPesquisa) || obra.artista.toLowerCase().includes(campoPesquisa) || obra.descricao.toLowerCase().includes(campoPesquisa)) {
                aux += `<div class="obra" onclick="adicionarFavorito('${obra.titulo}')">
                            <img src="imagens/${obra.imagem}" alt="${obra.titulo}">
                            <h2>${obra.titulo}</h2>
                            <h3>${obra.artista}</h3>
                            <p>${obra.descricao}</p>
                        </div>`;
            }
        }
    }

    galeria.innerHTML = aux;
}

// Função para pesquisar obras
function pesquisar() {
    campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    carregarGaleria(); // Recarrega a galeria com base no campo de pesquisa
}

// Função para filtrar obras por categoria
function filtrar(categoria) {
    carregarGaleria(categoria); // Recarrega a galeria com base na categoria selecionada
}

// Função para adicionar uma obra aos favoritos
function adicionarFavorito(titulo) {
    let obra = obras.find(o => o.titulo === titulo);
    if (obra && !favoritos.includes(obra)) {
        favoritos.push(obra);
        alert(`${titulo} foi adicionado aos favoritos!`);
    }
}

// Função para exibir obras favoritas
function exibirFavoritos() {
    let aux = '';
    galeria.innerHTML = '';

    for (let obra of favoritos) {
        aux += `<div class="obra">
                    <img src="imagens/${obra.imagem}" alt="${obra.titulo}">
                    <h2>${obra.titulo}</h2>
                    <h3>${obra.artista}</h3>
                    <p>${obra.descricao}</p>
                </div>`;
    }

    // Verifica se há favoritos para exibir
    if (favoritos.length === 0) {
        inicio.innerHTML = `<div class="mensagem-bem-vindo">
                                <h2>Você ainda não tem favoritos!</h2>
                                <p>Click nas obras para adicionar aos favoritos para vê-las aqui.</p>
                             </div>`;
    } else {
        galeria.innerHTML = aux;
    }
}

window.onload = function() {

        inicio.innerHTML = `<div class="mensagem-bem-vindo">
                                <h2>Bem-vindo à Galeria de Arte Interativa!</h2>
                                <p>Escolha uma opção no menu ou digite o nome de uma obra para começar a explorar.</p>
                             </div>`;

};


