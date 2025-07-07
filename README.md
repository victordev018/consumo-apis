# Consumo de APIs 

Este repositório contém uma demonstração do consumo de quatro APIs públicas, cada uma trazendo diferentes dados interessantes e formatos, incluindo uma que requer autenticação via chave de API.

## APIs Utilizadas

### 1. Rick and Morty API  
**Descrição:** API pública que fornece dados sobre personagens da série animada *Rick and Morty*.  
**Autenticação:** Não requer.  
**Exemplo cURL:**  
```bash
curl https://rickandmortyapi.com/api/character
```

### 2. NASA Astronomy Picture of the Day (APOD) API
**Descrição:** API oficial da NASA que disponibiliza a imagem ou vídeo astronômico do dia, com descrição detalhada. <br>
**Autenticação:** Requer chave de API (gratuita). <br>
**Exemplo cURL:**
```bash
curl "https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY"
```

### 3. TVMaze API
**Descrição:** API que fornece informações detalhadas sobre séries de TV, incluindo nomes, imagens e resumos. <br>
**Autenticação:** Não requer. <br>
**Exemplo cURL:**
```bash
curl https://api.tvmaze.com/shows
```

## 4. Jikan API (Anime)
**Descrição:** API não oficial para dados do site MyAnimeList, fornecendo informações sobre animes e seus personagens. <br>
**Autenticação:** Não requer. <br>
**Exemplo cURL:**
```bash
curl https://api.jikan.moe/v4/anime/1/characters
```
