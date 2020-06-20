import Vue from "vue";
import VueRouter from "vue-router";
import CategoryEdit from "../views/CategoryEdit.vue";
import ItemEdit from "../views/ItemsEdit.vue";
import CategoryList from "../views/CategoryList.vue";
import ItemList from "../views/ItemsList.vue";
import HeroEdit from "../views/HeroEdit.vue";
import HeroList from "../views/HeroList.vue";
import ArticlesEdit from "../views/ArticlesEdit.vue";
import ArticlesList from "../views/ArticlesList.vue";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      { path: "categories/create", component: CategoryEdit },
      { path: "categories/edit/:id", component: CategoryEdit, props: true },
      { path: "categories/list", component: CategoryList },

      //装备
      { path: "items/create", component: ItemEdit },
      { path: "items/edit/:id", component: ItemEdit, props: true },
      { path: "items/list", component: ItemList },
      //英雄
      { path: "heroes/create", component: HeroEdit },
      { path: "heroes/edit/:id", component: HeroEdit, props: true },
      { path: "heroes/list", component: HeroList },
      //文章
      { path: "articles/create", component: ArticlesEdit },
      { path: "articles/edit/:id", component: ArticlesEdit, props: true },
      { path: "articles/list", component: ArticlesList },
    ],
  },

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
