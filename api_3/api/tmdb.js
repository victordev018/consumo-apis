export default async function handler(req, res) {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', {
            headers: {
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
                Accept: 'application/json'
            }
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error("Erro na API TMDb:", error);
        res.status(500).json({ error: "Erro ao buscar dados da TMDb." });
    }
}