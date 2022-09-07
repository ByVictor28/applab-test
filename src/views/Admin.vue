<template>
  <div class="console">
    <h2>Administradores de la consola</h2>
    <div class="header">
      <div>
        <SearchInputComponent />
        <button>Buscar</button>
        <div class="filter">
          <button
            class="button-solid"
            @click="showFilterMenu = !showFilterMenu"
          >
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 1H1L10.6 12.5622V20.5556L15.4 23V12.5622L25 1Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="menu" :class="!showFilterMenu && 'hide-menu'">
            <p>Filtros de búsqueda</p>
            <hr />
            <SelectInputComponent
              label="Área"
              :options="['Recursos Humanos', 'Desarrollo', 'Etc']"
            />
            <SelectInputComponent
              label="Estatus"
              :options="['Activo', 'Inactivo']"
            />
            <hr />
            <div class="buttons">
              <button>Limpiar</button>
              <button class="button-solid">Aplicar filtros</button>
            </div>
            <div class="close">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="button-outline">Descargar</button>
        <button class="button-solid">Agregar nuevo admin</button>
      </div>
    </div>
    <TableComponent />
  </div>
</template>

<script>
import TableComponent from "../components/TableComponent.vue";
import SearchInputComponent from "../components/SearchInputComponent.vue";
import SelectInputComponent from "../components/SelectInputComponent.vue";
export default {
  components: { TableComponent, SearchInputComponent, SelectInputComponent },
  data() {
    return {
      showFilterMenu: true,
    };
  },
};
</script>

<style scoped>
.console {
  width: 100%;
  height: 100%;
  padding: 0 2rem;
}
.header {
  display: flex;
  justify-content: space-between;
}
.header div {
  display: flex;
  gap: 2rem;
}
button {
  height: 100%;
}
.filter {
  position: relative;
}
.menu {
  position: absolute;
  top: 6rem;
  left: 0;
  width: 38rem;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  z-index: 99;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.menu p {
  font-size: 1.6rem;
  font-weight: 600;
}
.menu .close {
  position: absolute;
  top: 3rem;
  right: 2rem;
}
.menu hr {
  width: 100%;
  border-top: 1px solid rgba(232, 234, 240, 1);
  margin: 0;
}
.hide-menu {
  visibility: hidden;
}
</style>
