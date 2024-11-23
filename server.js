import express from "express";
import routes from "./src/routes/postsRoutes.js";
// Importa o framework Express para criar a aplicação web



const app = express();
routes(app);
// Cria uma instância do Express, que será o núcleo da aplicação web.

app.listen(3000, () => {
  console.log("Servidor escutando...");
  // Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver pronto para receber requisições.
});

