import App from '../App.jsx'
import Home from '@/views/home/index.jsx'
import Settings from '../views/settings/index.jsx'
import Console from '../views/console/index.jsx'

export const routerList = [
  {
    component: App,
    routes: [
      {
        path: '/home',
        component: Home,
        name: 'home',
      },
      {
        path: '/settings',
        component: Settings,
      },
      {
        path: '/console',
        component: Console
      }
    ]
  }
]