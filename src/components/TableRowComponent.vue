<template>
  <tr>
    <td><input type="checkbox" /></td>
    <td>
      <img
        :src="require(`@/assets/images/${image}.png`)"
        :alt="`user_${image}`"
      />
      {{ name }}
    </td>
    <td>{{ area }}</td>
    <td>{{ email }}</td>
    <td>
      <span class="status" :class="status === 'activo' ? 'active' : 'inactive'">
        {{ status }}
      </span>
    </td>
    <TableDetailsIcons />
  </tr>
</template>

<script>
import TableDetailsIcons from "./TableDetailsIcons.vue";
export default {
  props: ["name", "area", "email", "status", "image"],
  components: { TableDetailsIcons },
};
</script>

<style>
tr td:nth-child(2) {
  display: flex;
  align-items: center;
  gap: 2rem;
}
td img {
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
}
.status {
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-transform: uppercase;
}
.active {
  background: #e8f5e9;
  color: #4caf50;
}
.inactive {
  background: rgba(255, 225, 224, 1);
  color: #eb5757;
}
</style>
