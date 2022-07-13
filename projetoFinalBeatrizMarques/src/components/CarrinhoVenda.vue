<script>
import axios from 'axios'
export default {
 
  data() {
    return {
      carrinho: [],
   
    };
  },
  async mounted() {
      try {
        const {data} = await axios.get("http://localhost:4001/carrinho?expand=livros");
        this.carrinho=data;
      }catch(e){
        console.log(e);
      }
    },

    methods:{
      async deleteLivros(livros_id) {
      try {
        await axios.delete(`http://localhost:4001/carrinho/${livros_id}`);
        const index = this.carrinho.findIndex(
          (livros) => livros.id === livros_id
        );
        this.livros.splice(index, 1);
        return Promise.resolve();
      } catch (e) {
        return Promise.reject("Erro ao excluir");
      }
    },
    }
};
</script>
<template>

  <body>
    <div class="row" >
      <div class="card" v-for="livro of carrinho" :key="livro.id">
        <div class="card-header">
          <h1>{{livro.livros.name}}</h1>
        </div>
        <div class="card-body">
          <p>
            {{livro.livros.autor}}
          </p>
          <p>
            {{livro.livros.editora}}
          </p>
          <button @click="deleteLivros(livro.id)" class="btn">Remover do Carrinho</button>
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