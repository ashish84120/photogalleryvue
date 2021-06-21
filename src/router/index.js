import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Photo from '../views/Photo.vue';
import Upload from '../views/Upload.vue';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/photo/:id',
      name: 'photo',
      component: Photo,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Upload,
    }
  ],
});