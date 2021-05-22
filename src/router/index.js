import { createWebHistory, createRouter } from 'vue-router'
import Form from '../views/Form.vue'
import Example from '../views/Example.vue'
import EventList from '../views/EventList.vue'
import Multistep from '../views/Multistep.vue'

const routes = [
    {
        path: '/',
        name: 'Form',
        component: Form 
    },
    {
        path: '/example',
        name: 'Example',
        component: Example 
    },
    {
        path: '/eventlist',
        name: 'EventList',
        component: EventList
    },
    {   
        path: '/multistep',
        name: 'Multistep',
        component: Multistep
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router