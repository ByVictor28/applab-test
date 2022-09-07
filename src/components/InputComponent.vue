<template>
  <div class="select">
    <label>{{ label }}</label>
    <!-- <select :name="label" id="">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select> -->
    <input
      type="text"
      :placeholder="label"
      v-bind:value="value"
      v-on:input="emitChange($event.target.value)"
    />
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
.select input {
  display: block;
  width: 100%;
  padding: 1.5rem 2rem;
  font-size: 1.8rem;
  border-radius: 1rem;
  border: 1px solid gray;
}
</style>
