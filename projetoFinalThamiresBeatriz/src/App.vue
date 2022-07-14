<script>
import { RouterLink, RouterView } from "vue-router";


</script>

<template>
  <header>
    <RouterLink to="/">Livros </RouterLink> |
    <RouterLink to="/adicionar">Adicionar Livros </RouterLink> |
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
}
a{
  text-decoration: none;
  text-align: center;
}
.menu{
  width:50%;
}
.menu2{
  width:50%;
  text-align:end;
}
.inicial{
  display:flex;
  flex-flow: row wrap;
}
</style>