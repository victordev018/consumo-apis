document.getElementById('fetch-apod-btn').addEventListener('click', getApodData);

function getApodData() {
    const container = document.getElementById('apod-container');
    const button = document.getElementById('fetch-apod-btn');
    const spinner = document.getElementById('loading-spinner');

    spinner.classList.remove('hidden');
    container.classList.add('hidden');

    fetch('/api/apod')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar dados');
            }
            return response.json();
        })
        .then(data => {
            spinner.classList.add('hidden');

            document.getElementById('apod-title').textContent = data.title;
            document.getElementById('apod-date').textContent = `Data: ${new Date(data.date).toLocaleDateString('pt-BR')}`;
            document.getElementById('apod-explanation').textContent = data.explanation;

            const mediaContainer = document.getElementById('apod-media');
            mediaContainer.innerHTML = '';

            if (data.media_type === 'image') {
                const img = document.createElement('img');
                img.src = data.url;
                mediaContainer.appendChild(img);
            } else if (data.media_type === 'video') {
                const iframe = document.createElement('iframe');
                iframe.src = data.url;
                iframe.width = "560";
                iframe.height = "315";
                iframe.allowFullscreen = true;
                mediaContainer.appendChild(iframe);
            }

            container.classList.remove('hidden');
        })
        .catch(error => {
            spinner.classList.add('hidden');
            console.error('Erro:', error);
            document.getElementById('apod-container').innerHTML = "<p style='color:red;'>Não foi possível buscar os dados.</p>";
            container.classList.remove('hidden');
        });
}
