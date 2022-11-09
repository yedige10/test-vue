<template>
  <div id="app">
    <SideBar/>
    <div class="main">
      <NavBar/>
      <div class="container">
        <Tickets/>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './components/sidebar/SideBar.vue'
import NavBar from './components/navbar/NavBar.vue'
import Tickets from './components/Tickets.vue'
export default {
  name: 'App',
  components: {
    SideBar,
    NavBar,
    Tickets
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
body { margin: 0; }
#app {
  display: flex;
  min-height: 100vh;
  background: #D1D7ED;
  font-family: 'Mulish', sans-serif;
}

.main {
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin: auto 20px;
}

</style>
