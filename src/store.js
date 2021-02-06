import Vue from "vue";
const pokeapi = require("pokeapi-js-wrapper");

const state = Vue.observable({
  called: [],
  get calledPokemon() {
    const called = [];
    this.called.forEach((index) => {
      called.push(this.shuffledPokemon[index]);
    });
    return called;
  },
  allPokemon: null,
  shuffledPokemon: null,
  selected: [],
});

const Pokedex = new pokeapi.Pokedex();

export default {
  get state() {
    return state;
  },
  async init() {
    state.allPokemon = (
      await Pokedex.getPokemonsList({
        limit: 50,
      })
    ).results;
    state.allPokemon = state.allPokemon.map((pokemon, index) => {
      return { ...pokemon, id: index + 1 };
    });
    this.shuffle();
  },

  shuffle() {
    const cloned = [...state.allPokemon];
    state.shuffledPokemon = shuffle(cloned);
  },

  toggleCell(index) {
    if (state.selected.includes(index)) {
      state.selected = state.selected.filter((i) => i != index);
    } else {
      state.selected.push(index);
    }
  },
  call() {
    const randomOne = randomNumber(0, state.shuffledPokemon.length - 1);
    if (state.called.includes(randomOne)) {
      this.call();
    } else {
      console.log("pushing", randomOne);
      state.called.push(randomOne);
    }
  },
};

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
