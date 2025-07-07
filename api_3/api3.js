function carregarFilmes() {
    fetch('./api/tmdb') // Caminho relativo ao backend da pasta
        .then(res => {
            if (!res.ok) throw new Error("Erro na resposta da API");
            return res.json();
        })
        .then(data => exibirFilmes(data.results))
        .catch(err => console.error("Erro ao buscar filmes:", err));
}

function exibirFilmes(filmes) {
    const container = document.getElementById("personagens");
    container.innerHTML = "";

    filmes.forEach(filme => {
        const card = document.createElement("div");
        card.className = "card";

        const imagem = filme.poster_path
            ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
            : "https://via.placeholder.com/220x280?text=Sem+Imagem";

        card.innerHTML = `
            <img src="${imagem}" alt="${filme.title}">
            <h3>${filme.title}</h3>
            <p>${filme.overview ? filme.overview.slice(0, 120) + '...' : 'Sem sinopse disponível.'}</p>
        `;

        container.appendChild(card);
    });
}