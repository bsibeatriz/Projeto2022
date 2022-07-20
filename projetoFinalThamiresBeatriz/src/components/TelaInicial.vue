<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useLivrosStore } from "@/stores/livros.js";
import { useCarrinhoStore } from "@/stores/carrinho.js";


export default {
  data() {
    return {
      adiciona_carrinho: {
        id: "",
        livrosId: "",
        quantidade: "",
      },
    };
  },
  computed: {
    ...mapStores(useLivrosStore),
    ...mapState(useLivrosStore, ["livros"]),
    ...mapState(useCarrinhoStore, ["carrinho"]),
  },
  methods: {
    ...mapActions(useLivrosStore, ["getAllLivros"]),
    ...mapActions(useCarrinhoStore, ["getAllCarrinho","addCarrinho"]),

    async adicionar_carrinho(livro_id) {
      try {
        this.adiciona_carrinho.livrosId = livro_id;
        this.adiciona_carrinho.quantidade = 1;
        const msg = await this.addCarrinho(this.adiciona_carrinho);
        alert(msg);
        this.currentLivros = {};
        document.location.reload(true);
      } catch (e) {
        alert(e);
      }
    },
  },
  async mounted() {
    try {
      await this.getAllLivros();
      await this.getAllCarrinho();
    } catch (e) {
      alert(e);
    }
  },
};
</script>
<template>
  <body>
    <div class="row">
      <div class="card" v-for="livro of livros" :key="livro.id">
        <div class="card-header">
          <h1>{{ livro.name }}</h1>
        </div>
        <div class="card-body">
          <p>
            {{ livro.autor }}
          </p>
          <p>
            {{ livro.editora }}
          </p>
          <p>
           R$ {{ livro.preco }}
          </p>
          
          <button @click="adicionar_carrinho(livro.id)" class="btn">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  </body>
</template>
<style>
body {
  background: #fefefe;
  font-family: sans-serif;
}

.container {
  width: 90%;
  margin: 50px auto;
}

.heading {
  text-align: center;
  font-size: 30px;
  margin-bottom: 50px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
}

.card {
  width: 30%;
  background: #fff;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  transition: 0.3s;
}

.card-header {
  text-align: center;
  padding: 15px 5px;
  background: linear-gradient(to right, #b17986, #ceaba5);
  color: #fff;
}

.card-body {
  padding: 10px 5px;
  text-align: center;
  font-size: 18px;
}

.card-body button {
  display: flexbox;
  color: #fff;
  text-align: center;
  background: linear-gradient(to right, #b17986, #ceaba5);
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 5px;
  border: 0;
  border-radius: 15px;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
}
</style>
