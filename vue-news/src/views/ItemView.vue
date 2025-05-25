<template>
  <div>
    <section>
      <!-- 질문상세영역 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-decription">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글  -->
      <div v-html="fetchedItem.content"></div>
    </section>
    <!-- <p>title: {{ fetchedItem.title }}</p>
    <div>content: {{ fetchedItem.content }}</div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // itemInfo() {
    //   return this.$store.state.item;
    // },
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    // console.log(this.$route.query.id);
    const itemId = this.$route.query.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-decription {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
