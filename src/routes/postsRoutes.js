import express from "express";
import { listarPosts } from "../controllers/postsController.js";


const routes = (app) => {
    app.use(express.json());
        // Habilita o middleware `express.json()` para permitir que a aplicação receba dados no formato JSON.
    app.get("/posts", listarPosts);
  
}

export default routes;
