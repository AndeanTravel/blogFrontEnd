import Comentarios from './views/Comentarios.vue';
import Login from './components/Login/Login.vue'
import Dashboard from './components/DashboardPublicaciones/Dashboard.vue'

const routes = [
    { path: '/comentarios', component: Comentarios },
    { path: '/Dashboard', component: Dashboard },
    { path: '/', component: Login },
    { path: '/Login', component: Login },
  ];

  export default routes;