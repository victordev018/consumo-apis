// Aguarda o clique no botão
document.getElementById('fetch-apod-btn').addEventListener('click', getApodData);

function getApodData() {
    const apiKey = NASA_API_KEY;

    // Elementos da página
    const container = document.getElementById('apod-container');
    const button = document.getElementById('fetch-apod-btn');
    const spinner = document.getElementById('loading-spinner');

    // Mostra o spinner de carregamento e esconde o conteúdo antigo
    spinner.classList.remove('hidden');
    container.classList.add('hidden');
    

    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    // Faz a chamada para a API usando fetch
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('A resposta da rede não foi OK: ' + response.statusText);
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then(data => {
            // Esconde o spinner
            spinner.classList.add('hidden');
            
            // Preenche os elementos da página com os dados da API
            document.getElementById('apod-title').textContent = data.title;
            document.getElementById('apod-date').textContent = `Data: ${new Date(data.date).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}`;
            document.getElementById('apod-explanation').textContent = data.explanation;

            const mediaContainer = document.getElementById('apod-media');
            mediaContainer.innerHTML = ''; 

            if (data.media_type === 'image') {
                const img = document.createElement('img');
                img.src = data.url;
                img.alt = data.title;
                mediaContainer.appendChild(img);
            } else if (data.media_type === 'video') {
                const iframe = document.createElement('iframe');
                iframe.src = data.url;
                iframe.width = "560";
                iframe.height = "315";
                iframe.title = data.title;
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;
                mediaContainer.appendChild(iframe);
            }

            // Mostra o container com os resultados
            container.classList.remove('hidden');
        })
        .catch(error => {
            // Em caso de erro, exibe uma mensagem no console e na página
            spinner.classList.add('hidden');
            console.error('Houve um problema com a requisição fetch:', error);
            document.getElementById('apod-container').innerHTML = `<p style="color: red;">Não foi possível buscar os dados. Verifique sua chave de API e a conexão com a internet.</p>`;
            container.classList.remove('hidden');
        });
}