import { defineStore } from "pinia";
import axios from "axios";

export const useCarrinhoStore = defineStore({
  id: "carrinho",
  state: () => ({
    carrinho: [],
  }),
  actions: {
    async getAllCarrinho() {
      try {
        const { data } = await axios.get("http://localhost:4001/carrinho?expand=livros");
        this.carrinho = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Livros'");
      }
    },
 
    async addCarrinho(livro_id) {
        try {
          const { data } = await axios.post( "http://localhost:4001/carrinho", livro_id);
          this.carrinho.push(data);
          return Promise.resolve("Adicionado ao carrinho!");
        } catch (e) {
          console.error(e);
          return Promise.reject(e);
        }
      },       
    async deleteCarrinho(carrinho_id) {
        try {
            await axios.delete(`http://localhost:4001/carrinho/${carrinho_id}`);
            const index = this.carrinho.findIndex(
              (carrinho) => carrinho.id === carrinho_id
            );
            this.carrinho.splice(index, 1);
            return Promise.resolve();
          } catch (e) {
            return Promise.reject("Erro ao excluir");
          }
    },
  },
});

