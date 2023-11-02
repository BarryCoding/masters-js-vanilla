import { loadMenu } from './services/Menu.js'
import Router from './services/Router.js'
import Store from './services/Store.js'

// DRY
window.myApp = { store: Store, router: Router }

// 'DOMContentLoaded' event make sure dom is loaded, faster than 'load'
window.addEventListener('DOMContentLoaded', () => {
  loadMenu()
  myApp.router.init()
})
