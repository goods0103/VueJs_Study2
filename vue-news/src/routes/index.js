import VueRouter from "vue-router";
import Vue from "vue";
// import NewsView from "../views/NewsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "../views/CreateListView.js";
import bus from "../utils/bus.js";
import { store } from "../store/index.js";

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
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        setTimeout(() => {
          7;
          store
            .dispatch("FETCH_LIST", to.name)
            .then(() => {
              console.log("Fetched");
              next();
            })
            .catch((e) => {
              console.log(e);
            });
        }, 1000);
      },
    },
    {
      // path url 주소
      path: "/ask",
      name: "ask",
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: createListView("AskView"),
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        setTimeout(() => {
          store
            .dispatch("FETCH_LIST", to.name)
            .then(() => {
              console.log("Fetched");
              next();
            })
            .catch((e) => {
              console.log(e);
            });
        }, 1000);
      },
    },
    {
      // path url 주소
      path: "/jobs",
      name: "jobs",
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: createListView("JobsView"),
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        setTimeout(() => {
          store
            .dispatch("FETCH_LIST", to.name)
            .then(() => {
              console.log("Fetched");
              next();
            })
            .catch((e) => {
              console.log(e);
            });
        }, 1000);
      },
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
