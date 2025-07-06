function carregarPersonagens() {
    const url = "https://rickandmortyapi.com/api/character";

    fetch(url)
        .then(response => response.json())
        .then(data => exibirPersonagens(data.results))
        .catch(error => console.error("Erro ao buscar personagens:", error));
}

function exibirPersonagens(personagens) {
    const container = document.getElementById("personagens");
    container.innerHTML = "";

    personagens.forEach(personagem => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${personagem.image}" alt="${personagem.name}">
            <h3>${personagem.name}</h3>
            <p>Status: ${personagem.status}</p>
            <p>Espécie: ${personagem.species}</p>
        `;

        container.appendChild(card);
    });
}
