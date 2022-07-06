import { defineStore } from "pinia";
import axios from "axios";

export const useCategoryStore = defineStore({
  id: "livros",
  state: () => ({
    livros: [],
  }),
  actions: {
    async getAllCategories() {
      try {
        const { data } = await axios.get("http://localhost:4000/livros");
        this.livros = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Catgory'");
      }
    }
  },
});
