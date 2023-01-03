<template>
  <div class="app"></div>
  <component :is="$route.meta.layout"></component>
</template>

<script setup></script>

<style lang="scss">
@font-face {
  font-family: "Open Sans";
  src: local("OpenSans-Bold"), local("OpenSans-Regular"),
    url("~@/assets/fonts/OpenSans-Bold.ttf"),
    url("~@/assets/fonts/OpenSans-Regular.ttf");
}
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
}
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100%;
  min-height: 100vh;
}
:root {
  --blue: #669bf1;
  --filterBlue: invert(56%) sepia(42%) saturate(807%) hue-rotate(184deg)
    brightness(99%) contrast(90%);
  --gray: #d7d7d7;
  --black: #000000;
}
</style>
