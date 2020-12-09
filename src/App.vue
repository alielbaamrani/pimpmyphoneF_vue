<template>
<div id="app">
  <main>
      <mynav/>
    <router-view/>
      <myfooter/>
</main>
 

</div>
</template>

<style>
#app {
  font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
          text-transform: uppercase;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  color: white;
}

</style>

<script>

import mynav from './components/navbar';
import myfooter from './components/footer';

export default {
  components: {mynav,myfooter},
}
</script>
