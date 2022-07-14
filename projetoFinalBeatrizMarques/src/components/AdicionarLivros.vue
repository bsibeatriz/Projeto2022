<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useLivrosStore } from "@/stores/livros.js";
// import axios from "axios";

export default {
  data() {
    return {
      currentLivros: {
        id: "",
        name: "",
        autor: "",
        editora: "",
      },
    };
  },
  computed: {
    ...mapStores(useLivrosStore),
    ...mapState(useLivrosStore, ["livros"]),
  },
  methods: {
    ...mapActions(useLivrosStore, ["getAllLivros", "addLivros"]),
    async save() {
      try {
        const msg = await this.addLivros(this.currentLivros);
        alert(msg);
        this.currentLivros = {};
      } catch (e) {
        alert(e);
      }
    },
    async delete() {
      console.log("re");
      // try {
      //   await axios.delete(`http://localhost:4001/livros/${livros_id}`);
      //   const index = this.livros.findIndex(
      //     (livros) => livros.id === livros_id
      //   );
      //   this.livros.splice(index, 1);
      //   return Promise.resolve();
      // } catch (e) {
      //   return Promise.reject("Erro ao excluir");
      // }
      // try {
      //   const msg = await this.deleteLivros(livros_id);
      //   alert(msg);
      //   this.currentLivros = {};
      // } catch (e) {
      //   alert(e);
      // }
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
    <button @click="save">Cadastrar</button>
  </form>
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
        <button >Ecluir Livro</button>
        <!-- <button @click="delete livro.id" class="btn">Excluir Livro</button> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.cadastro-form input {
  width: 75%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid gray;
  padding-left: 20px;
  font-size: 1.2em;
}

.cadastro-form label {
  width: 75%;
  height: 40px;
  padding-left: 20px;
  font-size: 1.2em;
  text-align: center;
}

.cadastro-form button {
  height: 35px;
  width: 20%;
  margin-left: 2%;
  background-color: rgb(63, 63, 125);
  color: whitesmoke;
  font-size: 1.2em;
  border-radius: 20px;
  border: 0;
}

.cadastro-form {
  margin: 10% auto;
  width: 30%;
}
</style>
