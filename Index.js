const express = require("express");
const noblox = require("noblox.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

async function init() {
  try {
    await noblox.setCookie(process.env.ROBLOX_COOKIE);
    console.log("✅ Logado no Roblox com noblox.js");
  } catch (err) {
    console.error("Erro ao logar:", err);
  }
}

app.get("/", async (req, res) => {
  try {
    const user = await noblox.getCurrentUser();
    res.send(`
      <h1>Roblox Revival</h1>
      <p>Logado como: <strong>${user.UserName}</strong></p>
    `);
  } catch (err) {
    res.send("<h1>Erro ao carregar usuário</h1>");
  }
});

app.listen(PORT, () => {
  console.log(`🌐 Servidor rodando na porta ${PORT}`);
  init();
});
