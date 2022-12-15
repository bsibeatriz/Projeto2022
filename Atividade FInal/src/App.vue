<script>
import { RouterLink, RouterView } from "vue-router";


</script>

<template>
  <header>
    <RouterLink to="/adicionar">Admin </RouterLink> 
    <RouterLink to="/">Livros </RouterLink>
    <RouterLink to="/carrinho">Carrinho </RouterLink>
    
  </header>
  <main>
    <RouterView />
  </main>
  
  
</template>
<style>
header {
  height: 10%;
  background-color: white;
  color: black;
  font-size: 1.5em;
  display: flex;
  text-decoration:none;
  justify-content: space-between;
  padding: 10px;
  margin: 0 20px;
}
a{
  text-decoration: none;
  text-align: center;
}



</style>