<template>
  <div>
    <section>
      <!-- 사용자 상세정보 -->
      <user-profile>
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">{{ "Posted " + fetchedItem.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글  -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: { UserProfile },
  computed: {
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
