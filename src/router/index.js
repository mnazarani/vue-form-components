import { createWebHistory, createRouter } from 'vue-router'
import Form from '../views/Form.vue'
import Example from '../views/Example.vue'

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router