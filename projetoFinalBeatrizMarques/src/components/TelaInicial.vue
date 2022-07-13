<script>
import axios from 'axios'
export default {
 
  data() {
    return {
      livros: [],
   
    };
  },
  async mounted() {
      try {
        const {data} = await axios.get("http://localhost:4001/livros");
        this.livros=data;
      }catch(e){
        console.log(e);
      }
    }
};
</script>
<template>

  <body>
    <div class="row" >
      <div class="card" v-for="livro of livros" :key="livro.id">
        <div class="card-header">
          <h1>{{livro.name}}</h1>
        </div>
        <div class="card-body">
          <p>
            {{livro.autor}}
          </p>
          <p>
            {{livro.editora}}
          </p>
          <a href="#" class="btn">Adicionar ao Carrinho</a>
          
          <a href="#" class="btn">Apagar Livros</a>
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