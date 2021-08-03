import App from '../App.jsx'
import Home from '@/views/home/index.jsx'
import Settings from '../views/settings/index.jsx'
import Console from '../views/console/index.jsx'
import Base from '../views/base/index.jsx'
import ServerList from '../views/server/index.jsx'

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
        path: '/base',
        component: Base,
        name: 'base',
      },
      {
        path: '/server-list',
        component: ServerList,
        name: 'serverList',
      },
      {
        path: '/settings',
        component: Settings,
        name: 'settings',
      },
      {
        path: '/console',
        component: Console,
        name: 'console',
      }
    ]
  }
]