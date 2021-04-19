import Vue from 'vue';
import VueRouter from 'vue-router';

import Readme from '../views/readme.vue';
import Todo from '../views/Todo.vue';
import Counter from '../views/Counter.vue';
import Form from '../views/Form.vue';
import Form2 from '../views/Form2.vue';
import VBind from '../views/v-bind.vue';
import VFor from '../views/v-for.vue';
import Watch from '../views/watch.vue';
import Modifier from '../views/modifier.vue';
import LifeCycle from '../views/LifeCycle.vue';
import Props from '../views/props.vue';
import Slot from '../views/slot.vue';
import Filter from '../views/filter.vue';
import Directive from '../views/directive.vue';
import vueRouter from '../views/vue-router.vue';
import Computer from '../views/Computer.vue';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
  },
  {
    path: '/',
    name: 'Readme',
    component: Readme,
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
  },
  {
    path: '/form2',
    name: 'Form2',
    component: Form2,
  },
  {
    path: '/v-bind',
    name: 'VBind',
    component: VBind,
  },
  {
    path: '/v-for',
    name: 'VFor',
    component: VFor,
  },
  {
    path: '/modifier',
    name: 'modifier',
    component: Modifier,
  },
  {
    path: '/LifeCycle',
    name: 'LifeCycle',
    component: LifeCycle,
  },
  {
    path: '/Props',
    name: 'Props',
    component: Props,
  },
  {
    path: '/slot',
    name: 'slot',
    component: Slot,
  },
  {
    path: '/filter',
    name: 'filter',
    component: Filter,
  },
  {
    path: '/directive',
    name: 'directive',
    component: Directive,
  },
  {
    path: '/vue-router',
    name: 'VueRouter',
    component: vueRouter,
  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch,
  },
  {
    path: '/computer',
    name: 'Computer',
    component: Computer,
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
