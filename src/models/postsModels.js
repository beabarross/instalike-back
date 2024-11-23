import conectarAoBanco from "../config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Cria uma conexão com o banco de dados usando a string de conexão fornecida pela variável de ambiente `STRING_CONEXAO`.
// A palavra-chave `await` indica que a função `conectarAoBanco` é assíncrona e espera que a conexão seja estabelecida antes de continuar.

export async function getTodosPosts() {
  // Função assíncrona para buscar todos os posts do banco de dados.
  const db = conexao.db("imersao-instabyte"); // Seleciona o banco de dados "imersao-instabyte"
  const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados
  return colecao.find().toArray(); // Executa uma consulta para encontrar todos os documentos na coleção e retorna os resultados como um array.
}

