<template>
  <div class="select">
    <label>{{ label }}</label>
    <select v-bind:value="value" v-on:change="emitChange($event.target.value)">
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="value === option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["label", "options", "value"],
  methods: {
    emitChange(e) {
      this.$emit("change", e);
    },
  },
};
</script>

<style scoped>
.select {
  display: block;
  position: relative;
  margin: 1rem 0;
}
.select label {
  display: block;
  position: absolute;
  top: -1rem;
  left: 1rem;
  background: white;
  padding: 0 1rem;
}
.select select {
  display: block;
  width: 100%;
  padding: 1.5rem 2rem;
  font-size: 1.8rem;
  border-radius: 1rem;
}
</style>
