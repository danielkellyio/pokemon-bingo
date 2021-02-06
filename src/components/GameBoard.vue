<template>
  <div class="box" style="display: inline-block">
    <div
      v-for="i in dimensions[0]"
      :key="i"
      :style="`display: flex; margin: 0 auto; width: ${
        size * dimensions[1] + dimensions[1] * 5
      }px`"
    >
      <game-cell
        v-for="n in dimensions[1]"
        :key="n"
        :style="`margin: 5px; background: #eee; width: ${size}px; height: ${size}px`"
        :index="n + (i - 1) * dimensions[0]"
      />
    </div>
  </div>
</template>
<script>
import GameCell from "@/components/GameCell";
export default {
  components: { GameCell },
  data() {
    return {
      dimensions: [4, 4],
      size: 160,
    };
  },
};
</script>