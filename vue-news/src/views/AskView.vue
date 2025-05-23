<template>
  <div>
    <div v-for="item in fetchedAsk">{{ item }}</div>
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
