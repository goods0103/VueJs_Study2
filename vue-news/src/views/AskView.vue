<template>
  <div>
    <!-- <div v-for="item in fetchedAsk">{{ item }}</div> -->
    <p v-for="item in fetchedAsk">
      <!-- <a v-bind:href="item.url">{{ item.title }}</a> -->
      <router-link v-bind:to="item.url">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      fetchedAsk: "fetchedAsk",
    }),
    // 2.
    // ...mapState({
    //   ask: (state) => state.asks,
    // }),
    // 1.
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
  created() {
    this.$store.dispatch("FETCH_ASKS");
  },
};
</script>

<style></style>
