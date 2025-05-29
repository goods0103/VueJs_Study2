<template>
  <div>
    <ul>
      <item>
        아이템1
      </item>
      <item> 아이템2 <button>click me</button> </item>
      <item>
        아이템3
      </item>
      <img
        src="./assets/endgame.png"
        alt="어벤져스 엔드게임"
        width="50px"
        height="50px"
      />
      <item>
        <div style="color: blue;">아이템4</div>
      </item>
    </ul>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  components: {
    Item,
  },
};
</script>
