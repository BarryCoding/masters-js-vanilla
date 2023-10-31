import { loadMenu } from './services/Menu.js'
import Store from './services/Store.js'

// DRY
window.myApp = { store: Store }

// 'DOMContentLoaded' event make sure dom is loaded, faster than 'load'
window.addEventListener('DOMContentLoaded', () => {
  loadMenu()
})
