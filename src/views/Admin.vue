<template>
  <div class="admin" style="margin-top: 30px">
    <button @click="$store.call()">
      {{ lastCalled ? "Next Pokemon" : "Start Game" }}
    </button>

    <div
      style="
        display: flex;
        max-width: 1200px;
        margin: 30px auto;
        justify-content: center;
      "
    >
      <div class="next-up" style="width: 70%; font-size: 2.5rem">
        <div v-if="lastCalled">
          <h1 style="text-transform: capitalize; margin: 0">
            {{ lastCalled.name }}
          </h1>
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${lastCalled.id}.svg`"
            :alt="lastCalled.name"
            style="height: 450px; max-width: 100%"
          />
        </div>
      </div>

      <div
        class="running-list"
        style="
          height: 550px;
          overflow: auto;
          background: #eee;
          margin-left: 30px;
        "
      >
        <input
          type="text"
          v-model="search"
          placeholder="Search"
          style="
            font-size: 1rem;
            display: block;
            padding: 10px;
            width: calc(100% - 4px);
            margin: 2px;
          "
        />
        <ul style="width: 300px; margin: 0 auto padding: 10px;">
          <li
            v-for="pokemon in filtered"
            :key="pokemon.id"
            style="display: flex; align-items: center; margin-bottom: 20px"
          >
            <img
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`"
              :alt="pokemon.name"
              width="60"
            />
            <span
              style="
                display: inline-block;
                margin-left: 10px;
                text-transform: capitalize;
              "
            >
              {{ pokemon.name }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: null,
    };
  },
  computed: {
    filtered() {
      if (!this.search) return this.reversed;
      return this.reversed.filter((pokemon) =>
        pokemon.name.includes(this.search.toLowerCase())
      );
    },
    lastCalled() {
      const called = this.$store.state.calledPokemon;
      if (!called) return null;
      return called[called.length - 1];
    },
    reversed() {
      const clone = [...this.$store.state.calledPokemon];
      return clone.reverse();
    },
  },
};
</script>

<style>
button {
  padding: 10px;
  font-size: 1.5rem;
  color: #3c68ac;
  background: #f8cc46;
  border: 3px solid#3c68ac;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
}
</style>