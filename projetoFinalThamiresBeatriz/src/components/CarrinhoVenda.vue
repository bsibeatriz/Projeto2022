<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useCarrinhoStore } from "@/stores/carrinho.js";



export default {
  data() {
    return {};
  },
  computed: {
    ...mapStores(useCarrinhoStore),
    ...mapState(useCarrinhoStore, ["carrinho"]),
  },
  methods: {
    ...mapActions(useCarrinhoStore, ["getAllCarrinho", "deleteCarrinho",]),
    
    async deleteItem(carrinho_id) {
      try {
        await this.deleteCarrinho(carrinho_id);
        alert("1 Item foi removido do carrinho.");
        document.location.reload(true);
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

    <table class="data-table">
      <thead>
        <tr>
          <th>
              <h2>Título</h2>
          </th>
          <th>
              <h2>Autor</h2>
          </th>
          <th>
              <h2>Editora</h2>
          </th>
          <th>
              <h2>Preço</h2>
          </th>
          <th>
              <h2>Quantidade</h2>
          </th>
          <th>
            <h2>Ações</h2> 
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of carrinho" :key="item.id">
          <td>{{item.livros.name}}</td>
          <td>{{item.livros.autor}}</td>
          <td>{{item.livros.editora}}</td>
          <td>R$ {{item.livros.preco}}</td>
          <td>{{item.quantidade}}</td>
          <td>
            <button @click="deleteItem(item.id)" class="btn">Remover</button>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</template>
<style>

body {
  background: #fefefe;
  font-family: sans-serif;
}
.data-table {
  border-collapse: separate;
  border-spacing: 2px;
  border: 1px solid #ceaba5;
  width: 100%;
}

th {
  border-bottom: 2px solid #ceaba5;
  text-align: center;
}

td {
  padding: 10px;
  border: 1px solid #ceaba5;
  text-align: center;
}

thead tr {
  background-color: #b17986;
  color: whitesmoke;
}

.data-table button{
  height: 25px;
  width: 50%;
  background-color: transparent;
  color: black;
  font-size: 0.8em;
  border-radius: 20px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>