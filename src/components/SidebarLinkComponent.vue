<template>
  <div class="box">
    <router-link :to="{ name: direction, params: { ...params } }">
      <slot></slot>
      <span> {{ name }}</span>
    </router-link>
    <div class="notification" v-if="notification">
      <span>{{ notification }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      required: true,
      type: String,
    },
    params: {
      type: Object,
    },
    name: {
      required: true,
      type: String,
    },
    notification: {
      default: 0,
      type: Number,
    },
  },
};
</script>

<style scoped>
.box {
  display: block;
  width: 100%;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(232, 234, 240, 1);
  padding-left: 4rem;
}
span {
  margin: 0 2rem 0 1rem;
}
.notification {
  background: #e8f5e9;
  display: inline-block;
  text-align: center;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 4px;
}
.notification span {
  margin: 0;
}
.box:has(> a.router-link-exact-active) {
  background: rgba(232, 234, 240, 1);
}
</style>
