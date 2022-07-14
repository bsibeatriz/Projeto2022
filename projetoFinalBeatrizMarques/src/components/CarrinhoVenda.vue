<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useLivrosStore } from "@/stores/livros.js";
import { useCarrinhoStore } from "@/stores/carrinho.js";
import axios from 'axios'



export default {
  data() {
    return {
 /*     currentLivros: {
        id: "",
        name: "",
        autor: "",
        editora: "",
      },*/
     // carrinho:[],
    };
  },
  computed: {
    ...mapStores(useCarrinhoStore),
    ...mapState(useCarrinhoStore, ["carrinho"]),
  //  ...mapState(useLivrosStore, ["livros"]),
  },
  methods: {
    ...mapActions(useCarrinhoStore, ["getAllCarrinho", "deleteCarrinho",]),
    
    async deleteItem(carrinho_id) {
      try {
        await this.deleteCarrinho(carrinho_id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
  },
  async mounted() {
    try {
      await this.getAllCarrinho();
    } catch (e) {
      alert(e);
    }
  },

};

</script>
<template>

  <body>
    <div class="row" >
      <div class="card" v-for="item of carrinho" :key="item.id">
        <div class="card-header">
          <h1>{{item.livros.name}}</h1>
        </div>
        <div class="card-body">
          <p>
            {{item.livros.autor}}
          </p>
          <p>
            {{item.livros.editora}}
          </p>
          <button @click="deleteItem(item.id)" class="btn">Remover do Carrinho</button>
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
  width: 20%;
  background: #fff;
  border: 1px solid #ccc;
  margin-bottom: 50px;
  transition: 0.3s;
}

.card-header {
  text-align: center;
  padding: 50px 10px;
  background: linear-gradient(to right, #b17986, #ceaba5);
  color: #fff;
}

.card-body {
  padding: 30px 20px;
  text-align: center;
  font-size: 18px;
}

.card-body .btn {
  display: block;
  color: #fff;
  text-align: center;
  background: linear-gradient(to right, #b17986, #ceaba5);
  margin-top: 30px;
  text-decoration: none;
  padding: 10px 5px;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
}
</style>