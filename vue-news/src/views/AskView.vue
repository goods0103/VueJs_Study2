<template>
  <div>
    <div v-for="ask in asks">{{ ask }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../apis/index.js";
export default {
  data() {
    return {
      asks: [],
    };
  },
  created() {
    fetchAskList()
      .then((response) => (this.asks = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
