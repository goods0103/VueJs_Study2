import ListView from "./ListView.vue";
import bus from "../utils/bus.js";

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션드링 들어갈 자리
    name,
    created() {
      bus.$emit("start:spinner");
      setTimeout(() => {
        this.$store
          .dispatch("FETCH_LIST", this.$route.name)
          .then(() => {
            console.log("Fetched");
            bus.$emit("end:spinner");
          })
          .catch((e) => {
            console.log(e);
          });
      }, 1000);
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
