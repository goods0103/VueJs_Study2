<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타정보영역 -->
        <div>
          <!-- 타이틀영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link v-bind:to="item.url">{{ item.title }}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            by

            <router-link
              v-if="item.user"
              v-bind:to="`/user/${item.user}`"
              class="link-text"
              >{{ item.user }}</router-link
            >
            <a v-else :href="item.url">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      const routeName = this.$route.name;
      if (routeName === "asks") {
        return this.$store.state.asks;
      } else if (routeName === "news") {
        return this.$store.state.news;
      } else if (routeName === "jobs") {
        return this.$store.state.jobs;
      }
    },
  },
  created() {
    const routeName = this.$route.name;
    if (routeName === "asks") {
      this.$store.dispatch("FETCH_ASKS");
    } else if (routeName === "news") {
      this.$store.dispatch("FETCH_NEWS");
    } else if (routeName === "jobs") {
      this.$store.dispatch("FETCH_JOBS");
    }
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
