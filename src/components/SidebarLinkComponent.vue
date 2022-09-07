<template>
  <div class="box">
    <router-link :to="{ name: direction }">
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
  padding: 1rem 0;
  border-top: 1px solid gray;
  padding-left: 4rem;
}
span {
  margin: 0 2rem 0 1rem;
}
.notification {
  background: gray;
  display: inline-block;
  text-align: center;
}
.notification span {
  margin: 0;
}
</style>
