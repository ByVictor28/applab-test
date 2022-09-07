<template>
  <div class="search">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.32">
        <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="#323232"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.0004 21.0004L16.6504 16.6504"
          stroke="#323232"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>

    <input type="text" placeholder="Buscar" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search {
  display: inline-block;
  position: relative;
}
input {
  padding: 1rem 2rem 1rem 5rem;
  border: none;
  background: rgba(232, 234, 240, 1);
  border-radius: 3rem;
}
svg {
  position: absolute;
  top: 1rem;
  left: 1.5rem;
}
</style>
