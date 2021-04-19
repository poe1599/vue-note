<template>
  <div id="app">
    <div class="nav">
      <!-- <router-link class="nav__item" to="/">Home</router-link> -->
      <!-- <router-link class="nav__item" to="/about">About</router-link> -->
      <router-link class="nav__item" to="/">Read me</router-link>
      <router-link class="nav__item" to="/todo">Todo</router-link>
      <router-link class="nav__item" to="/counter">Counter</router-link>
      <router-link class="nav__item" to="/form">Form</router-link>
      <router-link class="nav__item" to="/form2">Form2</router-link>
      <router-link class="nav__item" to="/v-bind">v-bind</router-link>
      <router-link class="nav__item" to="/v-for">v-for</router-link>
      <router-link class="nav__item" to="/watch">watch</router-link>
      <router-link class="nav__item" to="/modifier">modifier</router-link>
      <router-link class="nav__item" to="/LifeCycle">LifeCycle</router-link>
      <router-link class="nav__item" to="/Props">Props</router-link>
      <router-link class="nav__item" to="/slot">slot</router-link>
      <router-link class="nav__item" to="/filter">filter</router-link>
      <router-link class="nav__item" to="/directive">directive</router-link>
      <router-link class="nav__item" to="/vue-router">vue router</router-link>
      <router-link class="nav__item" to="/computer">Computer</router-link>
    </div>
    <router-view class="main"/>
  </div>
</template>

<style lang="scss">
@import 'assets/scss/reset.scss';

#app {
  font-family: Mulish, Noto Sans CJK TC, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
    display: flex;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(7, 146, 60);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}

.nav {
  display: flex;
  flex-direction: column;
  width: 150px;
  // flex: 1 0 auto;
  min-height: 100vh;
  height: 100vh;
  padding: 50px 20px;
  text-align: left;
  background: #eed2b6;
  overflow-y: scroll;

  &__item {
    margin: 0 0 10px 0;
    font-weight: bold;
    color: #2c3e50;
  }

  .router-link-exact-active {
    color: #42b983;
  }
}

.main {
  flex: 1 1 auto;
  height: 100vh;
  overflow-y: scroll;
  // margin: auto 0;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
