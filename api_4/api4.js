function getRandomInRange(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function gerarpersonagem() {
    let personagemAleatorio = document.getElementById("character");

    const gerandoPersonagem = (id = getRandomInRange(1, 1000)) => {
        return fetch("https://api.jikan.moe/v4/anime/" + id + "/characters")
            .then(resposta => resposta.json())
            .then(data => {
                const primeiroPersonagem = data.data[getRandomInRange(0,20)];
                construirpersonagem(primeiroPersonagem, personagemAleatorio); // Chama a função para construir o personagem
            })
            .catch(error => {
                console.error('Erro ao buscar personagem:', error);
                personagemAleatorio.textContent = "Erro ao buscar personagem."; // Mensagem de erro
            });
    };

    gerandoPersonagem(); // Chama a função para gerar o personagem
}

function construirpersonagem(personagem, selection) {
    selection.innerHTML = ""; // Limpa o conteúdo anterior
    if (personagem) {
        const element = document.createElement("img");
        element.src = personagem.character.images.jpg.image_url; // Corrigido para acessar a imagem corretamente
        element.id = "personagemPic";
        selection.appendChild(element);

        const nomeElement = document.createElement("p");
        nomeElement.textContent = personagem.character.name; // Acessa o nome do personagem
        selection.appendChild(nomeElement);
        
    } else {
        const resposta = "NENHUM PERSONAGEM ENCONTRADO";
        selection.textContent = resposta;
    }
}

const btn = document.getElementById("btn");
btn.addEventListener("click", gerarpersonagem);