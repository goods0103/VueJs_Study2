import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
} from "../apis/index.js";

export default {
  FETCH_NEWS(context) {
    return fetchNewsList()
      .then((response) => {
        // console.log(response.data);
        context.commit("SET_NEWS", response.data);
        return response;
      })
      .catch((error) => console.log(error));
  },
  FETCH_JOBS(context) {
    return fetchJobsList()
      .then(({ data }) => {
        context.commit("SET_JOBS", data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ASKS({ commit }) {
    return fetchAskList()
      .then((response) => {
        commit("SET_ASKS", response.data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then((response) => {
        // console.log(response.data);
        commit("SET_USER", response.data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, id) {
    return fetchItemInfo(id)
      .then((response) => {
        console.log(response.data);
        commit("SET_ITEM", response.data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then((response) => {
        console.log(response.data);
        commit("SET_LIST", response.data);
        return response;
      })
      .catch((error) => console.log(error));
  },
};
