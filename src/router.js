import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '@/components/Home.vue'
import hola from '@/components/Hola.vue'
import adeu from '@/components/Adeu.vue'

Vue.use(VueRouter);

let router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/home', name: "Home", component: home },
        { path: '/hola', component: hola },
        { path: '/adeu/:missatge', name: "Adeu", component: adeu },
        { path: '/adeu/:missatge', name: "Adeu2", component: adeu },
    ]
});

export default router
