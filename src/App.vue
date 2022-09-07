<template>
  <div id="app" class="qw">
    <Sidebar />
    <div class="content">
      <Header />
      <nav>
        <ul>
          <li>Inicio</li>
          <li>
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 8.825L4.10549 5L0.5 1.175L1.60999 0L6.33333 5L1.60999 10L0.5 8.825Z"
                fill="#4FB9BB"
              />
            </svg>
          </li>
          <li>Administradores</li>
        </ul>
      </nav>
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
nav ul {
  padding: 0;
  list-style: none;
  margin: 0;
  display: flex;
  gap: 2rem;
  margin: 2rem 0 0 2rem;
}
nav ul li {
  margin: 0;
}
nav ul :nth-child(3) {
  color: rgba(79, 185, 187, 1);
}
</style>
