<template>
  <div>
    <!-- <div v-for="item in this.$store.state.news">
      {{ item }}
    </div> -->
    <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style></style>
