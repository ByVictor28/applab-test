<template>
  <div class="container">
    <h2>Perfil de administrador</h2>

    <div class="content">
      <div class="image">
        <img src="@/assets/images/user_6.png" alt="profile user" />
      </div>
      <p class="name">Cheyenne Korsgaard</p>

      <div class="data">
        <div>
          <label>NOmbre (s)</label>
          <p>Cheyenne Korsgaard</p>
        </div>
        <div>
          <label>Apellidos</label>
          <p>Korsgaard</p>
        </div>
        <div>
          <label>Correo electrónico</label>
          <p>correo@gmail.com</p>
        </div>
        <div>
          <label>Área</label>
          <p>Recursos Humanos</p>
        </div>
        <div>
          <label>Estatus</label>
          <p>Activo</p>
        </div>
      </div>

      <hr />
      <button
        class="button-solid"
        @click="$router.push({ name: 'CreateAdmin', params: { id: 1 } })"
      >
        Editar administrador
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.image {
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  overflow: hidden;
}
.name {
  font-weight: 600;
  font-size: 1.8rem;
}
.data {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

label {
  text-transform: uppercase;
  color: rgba(50, 50, 50, 1);
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
}
.data p {
  font-weight: 600;
  font-size: 1.6rem;
  margin: 1rem 0;
}
hr {
  border-top: 1px solid gainsboro;
  margin: 2rem 0;
}

@media only screen and (max-width: 768px) {
  .data {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
}
</style>
