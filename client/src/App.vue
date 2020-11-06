<template>
  <div id="app">
    <Header />

    <main class="container pt-4 pb-4">
      <router-view></router-view>
    </main>


  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
    @import './assets/base.scss';

    $mybg: #fff;
    * {
      font-family: 'Roboto', sans-serif;
    }
    body {
        background: $mybg;
        @extend %base;
    }
    html {
        @extend %base;
    }
</style>
