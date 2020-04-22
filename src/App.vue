<template>
  <div id="app">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/">Acasa</router-link>
      </el-menu-item>
      <el-menu-item index="3" style="float: right;">
        <router-link to="/symptom/add">+ Adauga simptom</router-link>
      </el-menu-item>
    </el-menu>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      name: "George"
    };
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
main {
  padding: 0 2rem;
}
</style>
