import { createWebHistory, createRouter } from 'vue-router'
import Form from '../views/Form.vue'

const routes = [
    {
        path: '/',
        name: 'Form',
        component: Form 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router