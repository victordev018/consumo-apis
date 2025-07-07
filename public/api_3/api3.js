function carregarSeries() {
    const url = "https://api.tvmaze.com/shows";

    fetch(url)
        .then(res => res.json())
        .then(data => {
            exibirSeries(data.slice(0, 24));
        })
        .catch(err => console.error("Erro ao buscar séries:", err));
}

function exibirSeries(series) {
    const container = document.getElementById("personagens");
    container.innerHTML = "";

    series.forEach(show => {
        const imagem = show.image ? show.image.medium : "https://via.placeholder.com/220x280?text=Sem+Imagem";

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${imagem}" alt="${show.name}">
            <h3>${show.name}</h3>
            <p>${show.summary ? show.summary.replace(/<[^>]+>/g, '').slice(0, 120) + '...' : 'Sem descrição disponível.'}</p>
        `;

        container.appendChild(card);
    });
}