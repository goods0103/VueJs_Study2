import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
} from "../apis/index.js";

export default {
  // async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit("SET_NEWS", response.data);
    return response;
  },
  async FETCH_JOBS(context) {
    const response = await fetchJobsList();
    context.commit("SET_JOBS", response.data);
    return response;
  },
  async FETCH_ASKS(context) {
    const response = await fetchAskList();
    context.commit("SET_ASKS", response.data);
    return response;
  },
  async FETCH_USER({ commit }, name) {
    const response = await fetchUserInfo(name);
    commit("SET_USER", response.data);
    return response;
  },
  async FETCH_ITEM({ commit }, id) {
    const response = await fetchItemInfo(id);
    commit("SET_ITEM", response.data);
    return response;
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit("SET_LIST", response.data);
    return response;
  },
};
