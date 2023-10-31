// DRY Menu

import API from './API.js'

export async function loadMenu() {
  myApp.store.menu = await API.fetchMenu()
}
