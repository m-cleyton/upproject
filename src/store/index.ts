import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const message =
  "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publocados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.";

export default new Vuex.Store({
  state: {
    filter: "Todos",
    order: "price",
    list: [
      {
        id: 5,
        message,
        price: 0.99,
        icon: "briefcase",
        title: "Profissional",
      },
      {
        id: 4,
        message,
        price: 9.99,
        icon: "tree",
        title: "Sócio Ambiental",
      },
      {
        id: 1,
        message,
        price: 19.99,
        icon: "person",
        title: "Cadastro",
      },
      {
        id: 3,
        message,
        price: 29.99,
        icon: "star",
        title: "Mídia / Internet",
      },
      {
        id: 2,
        message,
        price: 39.99,
        icon: "star",
        title: "Mídia / Internet",
      },
    ],
  },
  getters: {
    getList: (state) => {
      return state.list
        .filter((item) =>
          state.filter === "Todos"
            ? item
            : item.title === state.filter
            ? item
            : null
        )
        .sort((itemA, itemB) => {
          if (state.order === "id") return itemA.id - itemB.id;
          if (state.order === "price") return itemA.price - itemB.price;
          return 0;
        });
    },
  },
  mutations: {
    changeFilter(state, payload) {
      state.filter = payload;
    },
    changeOrder(state, payload) {
      state.order = payload;
    },
  },
});
