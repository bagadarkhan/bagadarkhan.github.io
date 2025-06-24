const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/api/haberler", async (req, res) => {
  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: "aviation OR artificial intelligence OR drone",
        language: "tr",
        pageSize: 6,
        sortBy: "publishedAt",
        apiKey: process.env.NEWS_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ hata: "Haberler yüklenemedi", detay: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});

div.innerHTML = `
  <img src="${haber.urlToImage}" alt="Haber görseli" style="width:100%; max-height:200px; object-fit:cover; border-radius:8px;">
  <h3><a href="${haber.url}" target="_blank">${haber.title}</a></h3>
  <p>${haber.description || "Açıklama yok."}</p>
  <small>${new Date(haber.publishedAt).toLocaleString()}</small>
`;
