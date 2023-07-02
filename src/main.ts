import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
//@ts-ignore
import { createStore } from "vuex";
import "./style.css";
import App from "./App.vue";
import GameVue from "./views/Game.vue";
import ResultVue from "./views/Result.vue";

// Vuejs instance
const app = createApp(App);

// Vue-router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: GameVue },
    { path: "/result", component: ResultVue },
  ],
});

// Vuex instance
const store = createStore({
  state() {
    return {
      userChoise: "",
    };
  },
  getters: {
    getChoise(state: any) {
      return state.userChoise;
    },
  },
  mutations: {
    setChoise(state: any, payload: string) {
      state.userChoise = payload;
    },
  },
});

app.use(router).use(store).mount("#app");
