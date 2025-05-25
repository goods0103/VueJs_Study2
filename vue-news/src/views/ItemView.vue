<template>
  <div>
    <user-profile></user-profile>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
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
