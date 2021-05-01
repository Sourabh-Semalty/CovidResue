import React from 'react'
import Header from './components/header/Header'
import Loader from './components/Loader'

import * as apiRoutes from './services/api-routes'

const App = () => {

  function initialize() {
    apiRoutes.getInfo().then(info => {
      console.log(info)
    }).catch(e => {
      console.error(e)
    })
  }

  initialize()

  return (
    <div>
      <Header />
      <Loader />
    </div>
  )
}

export default App
