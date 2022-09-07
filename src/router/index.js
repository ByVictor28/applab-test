import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Admin.vue";
import Profile from "../views/Profile.vue";
import WorkingOnIt from "../views/WorkingOnIt.vue";
import CreateAdmin from "../views/CreateAdmin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/form/:id",
    name: "CreateAdmin",
    component: CreateAdmin,
    props: (route) => {
      return {
        id: route.params.id,
      };
    },
  },
  {
    path: "/working-Usuarios",
    name: "Working-Usuarios",
    component: WorkingOnIt,
  },
  {
    path: "/worki-Ming",
    name: "Working-Mi",
    component: WorkingOnIt,
  },
  {
    path: "/working-Cursos",
    name: "Working-Cursos",
    component: WorkingOnIt,
  },
  {
    path: "/working-Recompensas",
    name: "Working-Recompensas",
    component: WorkingOnIt,
  },
  {
    path: "/working-Eventos",
    name: "Working-Eventos",
    component: WorkingOnIt,
  },
  {
    path: "/working-Notificaciones",
    name: "Working-Notificaciones",
    component: WorkingOnIt,
  },
  {
    path: "/working-Reportes",
    name: "Working-Reportes",
    component: WorkingOnIt,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
