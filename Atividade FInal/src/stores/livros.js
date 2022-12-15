import { defineStore } from "pinia";
import axios from "axios";

export const useLivrosStore = defineStore({
  id: "livros",
  state: () => ({
    livros: [],
  }),
  actions: {
    async getAllLivros() {
      try {
        const { data } = await axios.get("http://localhost:4001/livros");
        this.livros = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Livros'");
      }
    },
 
    async addLivros(livro) {
      try {
        const { data } = await axios.post( "http://localhost:4001/livros", livro);
        this.livros.push(data);
        return Promise.resolve("Livro adicionado com sucesso!");
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
    async deleteLivros(livros_id) {
      try {
        await axios.delete(`http://localhost:4001/livros/${livros_id}`);
        const index = this.livros.findIndex(
          (livros) => livros.id === livros_id
        );
        this.livros.splice(index, 1);
        return Promise.resolve("livro excluido");
      } catch (e) {
        return Promise.reject("Erro ao excluir");
      }
    },
  },
});

