<template>
  <div id="app">
    <div id="nav">
      <h1
        style="
          display: flex;
          align-items: end;
          justify-content: center;
          font-size: 3rem;
          margin: 0;
        "
      >
        <img
          src="/pokemon-logo.png"
          alt=""
          width="200"
          style="margin-right: 10px"
        />
        Bingo
      </h1>
    </div>
    <div class="page-wrapper">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.init();
  },
};
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
}
html,
body {
  min-height: 100%;
}
body {
  background: url("/bg.jpg") no-repeat !important;
  background-size: cover !important;
  background-position: center bottom !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.box {
  background: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
}
</style>
