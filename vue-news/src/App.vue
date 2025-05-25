<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  components: { ToolBar },
  methods: {},
};
</script>

<style>
.body {
  padding: 0;
  margin: 0;
}
/* Router Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
