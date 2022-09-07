<template>
  <div class="container">
    <h2>Agregar administrador</h2>
    <div class="content">
      <p>Sube tu fotografía con un peso menor a 2MB</p>
      <div class="droop" v-if="!userData.image">
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.34" cx="26" cy="26" r="22" fill="#323232" />
          <circle opacity="0.34" cx="26" cy="26" r="25.5" stroke="#323232" />
          <g clip-path="url(#clip0_891_53881)">
            <path
              d="M34 20.0015V20.25H28.6667V15H28.9191C29.1843 15 29.4387 15.1037 29.6262 15.2883L33.7071 19.3054C33.8946 19.49 34 19.7404 34 20.0015ZM28.3333 21.5625C27.7833 21.5625 27.3333 21.1195 27.3333 20.5781V15H19C18.4477 15 18 15.4407 18 15.9844V35.0156C18 35.5593 18.4477 36 19 36H33C33.5523 36 34 35.5593 34 35.0156V21.5625H28.3333ZM22.6894 22.2188C23.794 22.2188 24.6894 23.1002 24.6894 24.1875C24.6894 25.2748 23.794 26.1562 22.6894 26.1562C21.5848 26.1562 20.6894 25.2748 20.6894 24.1875C20.6894 23.1002 21.5848 22.2188 22.6894 22.2188ZM31.356 32.0625H20.6894L20.7096 30.0739L22.356 28.4531C22.5513 28.2609 22.8477 28.2808 23.0429 28.473L24.6894 30.0938L29.0025 25.848C29.1978 25.6558 29.5143 25.6558 29.7096 25.848L31.356 27.4688V32.0625Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_891_53881">
              <rect
                width="16"
                height="21"
                fill="white"
                transform="translate(18 15)"
              />
            </clipPath>
          </defs>
        </svg>
        <p>Arrastra tu archivo o</p>
        <button class="button-outline">Selecciona</button>
      </div>
      <div class="image" v-else>
        <img :src="require(`@/assets/images/${userData.image}.png`)" alt="" />
      </div>
      <form>
        <InputComponent
          label="Nombres (s)"
          :value="userData.name"
          @change="
            (e) => {
              userData.name = e;
            }
          "
        />
        <InputComponent
          label="Apellidos"
          :value="userData.lastName"
          @change="
            (e) => {
              userData.lastName = e;
            }
          "
        />
        <InputComponent
          label="Correo electrónico"
          :value="userData.email"
          @change="
            (e) => {
              userData.email = e;
            }
          "
        />
        <SelectInputComponent
          label="Área"
          :options="['Recursos humanos', 'Desarrollo']"
          :value="userData.area"
          @change="
            (e) => {
              userData.area = e;
            }
          "
        />
        <SelectInputComponent
          label="Estatus"
          :options="['Activo', 'Inactivo']"
          :value="userData.status"
          @change="
            (e) => {
              userData.status = e;
            }
          "
        />
      </form>
      <hr />
      <div class="buttons">
        <button class="button-outline">Cancelar</button>
        <button class="button-solid">Agregar administrador</button>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from "../components/InputComponent.vue";
import SelectInputComponent from "../components/SelectInputComponent.vue";
export default {
  components: {
    InputComponent,
    SelectInputComponent,
  },
  props: {
    id: {
      required: true,
    },
  },
  data() {
    return {
      userData: {
        image: null,
        name: "",
        lastName: "",
        email: "",
        area: "",
        status: "",
      },
    };
  },
  methods: {
    loadUserData() {
      if (this.id !== "new") {
        this.userData = {
          image: "user_7",
          name: "Juan",
          lastName: "López",
          email: "correo@gmail.com",
          area: "Recursos humanos",
          status: "Activo",
        };
      }
    },
  },
  mounted() {
    this.loadUserData();
  },
  watch: {
    id() {
      this.loadUserData();
    },
  },
};
</script>

<style scoped>
.droop {
  height: 20rem;
  width: 19rem;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid #e8eaf0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 30%;
}
hr {
  margin: 2rem 0;
}
.buttons {
  display: flex;
  gap: 2rem;
}
.image img {
  height: 12.7rem;
  width: 22.4rem;
  margin: 3rem 0;
  object-fit: cover;
}
@media only screen and (max-width: 992px) {
  form {
    width: 90%;
  }
}
</style>
