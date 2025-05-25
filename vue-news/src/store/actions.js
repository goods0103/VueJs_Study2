import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
} from "../apis/index.js";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        // console.log(response.data);
        context.commit("SET_NEWS", response.data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(({ data }) => {
        context.commit("SET_JOBS", data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ASKS({ commit }) {
    fetchAskList()
      .then((response) => {
        commit("SET_ASKS", response.data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then((response) => {
        // console.log(response.data);
        commit("SET_USER", response.data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, id) {
    fetchItemInfo(id)
      .then((response) => {
        console.log(response.data);
        commit("SET_ITEM", response.data);
      })
      .catch((error) => console.log(error));
  },
};
