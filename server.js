import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta public
app.use(express.static("public"));

// Rota para API 4 (chamada proxy segura)
app.get("/api/apod", async (req, res) => {
  const apiKey = process.env.NASA_API_KEY;
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Erro ao buscar dados da API");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Inicializa servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
