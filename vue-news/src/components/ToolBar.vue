<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
    <!-- <router-link to="/user">User</router-link>
    <router-link to="/item">Item</router-link> -->
  </div>
</template>

<script>
export default {};
</script>

// 해당 컴포넌트에만 적용되는 스타일링 scoped
<style scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}
.header .router-link-exact-active {
  color: #35495e;
}

.header a {
  color: white;
}
</style>
