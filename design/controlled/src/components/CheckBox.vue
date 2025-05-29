<template>
  <input type="checkbox" :value="value" @click="toggleCheckBox" />
</template>

<script>
export default {
  // props: ["checked"],
  props: ["value"],
  methods: {
    toggleCheckBox() {
      this.$emit("input", !this.value);
    },
  },
};
</script>
