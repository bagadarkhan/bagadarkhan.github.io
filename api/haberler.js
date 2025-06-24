const axios = require("axios");

module.exports = async function handler(req, res) {
  try {
    // URL'den kategori parametresini al
    const kategori = req.query.kategori || "genel";

    // Kategoriye göre sorgu belirle
    let q = "";
    if (kategori === "yapay-zeka") {
      q = "artificial intelligence OR yapay zeka";
    } else if (kategori === "ucak") {
      q = "aviation OR airplane OR uçak";
    } else if (kategori === "drone") {
      q = "drone OR otonom hava aracı";
    } else {
      q = "aviation OR artificial intelligence OR drone";
    }

    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: q,
        language: "tr",
        pageSize: 6,
        sortBy: "publishedAt",
        apiKey: process.env.NEWS_API_KEY,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ hata: "Haberler yüklenemedi", detay: error.message });
  }
};
