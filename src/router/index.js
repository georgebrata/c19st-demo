import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Today',
    component: () => import('../views/Today.vue')
  },
  {
    path: '/symptom/add',
    name: 'Add Symptom',
    component: () => import('../views/AddSymptom.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
