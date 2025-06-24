const axios = require("../node_modules/axios/index.d.cts");

module.exports = async function handler(req, res) {
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
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ hata: "Haberler yüklenemedi", detay: error.message });
  }
};
