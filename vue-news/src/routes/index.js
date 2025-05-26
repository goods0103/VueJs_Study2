import VueRouter from "vue-router";
import Vue from "vue";
// import NewsView from "../views/NewsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "../views/CreateListView.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      // path url 주소
      path: "/news",
      name: "news",
      // component: url 주소로 갔을 때 표시될 컴포넌트
      // component: NewsView,
      component: createListView("NewsView"),
    },
    {
      // path url 주소
      path: "/ask",
      name: "ask",
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: createListView("AskView"),
    },
    {
      // path url 주소
      path: "/jobs",
      name: "jobs",
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: createListView("JobsView"),
    },

    {
      // path url 주소
      path: "/user/:id",
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: UserView,
    },
    {
      // path url 주소
      path: "/item",
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: ItemView,
    },
  ],
});
