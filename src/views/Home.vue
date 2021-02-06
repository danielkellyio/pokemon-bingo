<template>
  <div class="home">
    <GameBoard />
  </div>
</template>

<script>
// @ is an alias to /src
import GameBoard from "@/components/GameBoard.vue";

export default {
  name: "Home",
  components: {
    GameBoard,
  },
};
</script>
