<template>
  <div id="app" class="qw">
    <Sidebar />
    <div class="content">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>
<style>
#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
}
.content {
  flex: 1 0 auto;
}
</style>
