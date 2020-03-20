import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Startseite',
      component: () => import('@/pages/Home'),
      meta: {
        hashMap: {
          '#oeffnungszeiten': 'openingHours',
          '#leistungen': 'services',
          '#kontakt': 'contact'
        }
      }
    },
    {
      path: '/auftrag',
      name: 'Auftrag',
      component: () => import('@/pages/Task')
    },
    {
      path: '/einstellungen',
      name: 'Einstellungen',
      component: () => import('@/pages/Settings')
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: () => import('@/pages/Conditions')
    }
  ]
})
