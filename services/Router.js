const Router = {
  init: () => {
    // 1 Listen to url change when goBack or goForward in browser
    window.addEventListener('popstate', (event) => {
      // retrieve state from history
      // don't remember the router history
      Router.go(event.state.path, false)
    })

    // 2 Overwrite the a tag click event
    document.querySelectorAll('a.navlink').forEach((link) => {
      link.addEventListener('click', (event) => {
        // stop refresh the page browser default behavior of a tag
        event.preventDefault()
        // console.log(`🔎 🔍 diff:`, event.target.getAttribute('href'), event.target.href)
        Router.go(event.target.getAttribute('href'))
      })
    })

    // 3 Check path when init
    Router.go(location.pathname)
  },
  go(path, addToHistory = true) {
    if (addToHistory) {
      // save data (in 1st param) and fake url (in 3rd param)
      history.pushState({ path }, '', path)
    }

    // insert content by path
    let pageElement = null
    switch (path) {
      case '/':
        pageElement = document.createElement('h1')
        pageElement.textContent = 'Home'
        break
      case '/order':
        pageElement = document.createElement('h1')
        pageElement.textContent = 'Order'
        break
      default:
        // path of detail page
        if (path.startWith('product-')) {
          pageElement = document.createElement('h1')
          pageElement.textContent = 'Detail'
          // save id retrieved from the path in dataset
          pageElement.dataset.id = path.substring(path.lastIndexOf('-') + 1)
        }
        break
    }
    if (pageElement) {
      const main = document.querySelector('main') // cache the element for better performance
      main.innerHTML = '' // clear content
      main.appendChild(pageElement)
      window.scrollX = 0 // reset scroll
      window.scrollY = 0
    }
  },
}

export default Router
