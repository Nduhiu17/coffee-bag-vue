import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',

            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/create',
            name: 'create',

            component: () =>
                import ( /* webpackChunkName: "create" */ './views/Create.vue')
        },
        {
            path: '/contacts',
            name: 'contacts',

            component: () =>
                import ( /* webpackChunkName: "contacts" */ './views/Contacts.vue')
        },
        {
            path: '/topic-details',
            name: 'topic-details',

            component: () =>
                import ( /* webpackChunkName: "topic-details" */ './views/ForumDetails.vue')
        }


    ]
})