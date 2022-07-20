<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useLivrosStore } from "@/stores/livros.js";

export default {
  data() {
    return {
      currentLivros: {
        id: "",
        name: "",
        autor: "",
        editora: "",
        preco: "",
      },
    };
  },
  computed: {
    ...mapStores(useLivrosStore),
    ...mapState(useLivrosStore, ["livros"]),
  },
  methods: {
    ...mapActions(useLivrosStore, ["getAllLivros", "addLivros", "deleteLivros"]),
    async save() {
      try {
        const msg = await this.addLivros(this.currentLivros);
        alert(msg);
        this.currentLivros = {};
      } catch (e) {
        alert(e);
      }
    },

    async remover(livros_id) {
       try {
         const msg = await this.deleteLivros(livros_id);
         alert(msg);
         this.currentLivros = {};
       } catch (e) {
         alert(e);
       }
    },
  },
  async mounted() {
    try {
      await this.getAllLivros();
    } catch (e) {
      alert(e);
    }
  },
};
</script>

<template>
  <form class="cadastro-form">
    <label>Livro</label> <br />
    <input type="text" v-model="currentLivros.name" /> <br />
    <label>Autor</label> <br />
    <input type="text" v-model="currentLivros.autor" /> <br />
    <label>Editora</label> <br />
    <input type="text" v-model="currentLivros.editora" />
    <br />
    <label>Preço</label> <br />
    <input type="text" v-model="currentLivros.preco" />
    <br />
    <button @click="save">Salvar</button>
  </form>
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
            <span> <h2>Ações</h2> </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="livro of livros" :key="livro.id">
          <td>{{ livro.name }}</td>
          <td>{{ livro.autor }}</td>
          <td>{{ livro.editora }}</td>
          <td>
            <button @click="remover(livro.id)">Apagar</button>
          </td>
        </tr>
      </tbody>
    </table>

</template>

<style scoped>
.cadastro-form input {
  width: 85%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid gray;
  padding-left: 20px;
  font-size: 1.2em;
}

.cadastro-form label {
  display: block;
  margin-top: 2%;
  width: 85%;
  height: 10px;
  font-size: 1.2em;
  text-align: center;
}

.cadastro-form button {
  display: flexbox;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 30%;
  margin-top: 2%;
  margin-bottom: 5%;
  background-color: #b17986;
  color: whitesmoke;
  font-size: 1.2em;
  border-radius: 20px;
  border: 0;
}

.cadastro-form {
  margin: auto;
  width: 50%;
}

.data-table {
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
  width: 100%;
}

th {
  border-bottom: 2px solid white;
  text-align: center;
}

td {
  padding: 10px;
}

thead tr {
  background-color: #b17986;
  color: whitesmoke;
}

tbody tr:nth-child(odd) {
  background-color: #ceaba5;
}
.data-table button{
  height: 25px;
  width: 35%;
  background-color: transparent;
  color: black;
  font-size: 1.2em;
  border-radius: 20px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
