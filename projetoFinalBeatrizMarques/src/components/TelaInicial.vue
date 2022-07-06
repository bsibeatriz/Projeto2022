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
        const {data} = await axios.get("http://localhost:4000/livros");
        this.livros=data;
      }catch(e){
        console.log(e);
      }
    }
};
</script><template>
  <header>
    <div>hello word</div>
    <div class="about">
    <h1>livros</h1>
    <hr>
    <ul>
      <li v-for="livro of livros" :key="livro.id"> {{livro.name}}</li>
    </ul>

  </div>
  </header>
  <body></body>
</template>
