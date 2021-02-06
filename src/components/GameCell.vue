<template>
  <div
    style="
      display: flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      cursor: pointer;
    "
    :class="{ isSelected }"
    @click="$store.toggleCell(index)"
  >
    <img
      :src="imgUrl"
      style="max-width: 70%; max-height: 70%; margin: 0 auto; display: block"
      :alt="pokemon.name"
    />
    <div style="width: 100%; margin-top: 5px; text-transform: capitalize">
      {{ pokemon.name }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["index", "n"],
  computed: {
    pokemon() {
      if (!this.$store.state.shuffledPokemon) return {};
      return this.$store.state.shuffledPokemon[this.index];
    },
    imgUrl() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemon.id}.svg`;
    },
    isSelected() {
      return this.$store.state.selected.includes(this.index);
    },
  },
};
</script>
<style>
.isSelected {
  background: #73b7ff !important;
}
</style>