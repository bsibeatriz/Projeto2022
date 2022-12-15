import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "livros",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/TelaInicial.vue"),
    },
    {
      path: "/adicionar",
      name: "adicionarlivros",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/AdicionarLivros.vue"),
    },
    {
      path: "/carrinho",
      name: "product",
      component: () => import("../components/CarrinhoVenda.vue"),
    },
  ],
});

export default router;