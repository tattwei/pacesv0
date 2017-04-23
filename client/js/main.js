import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute} from 'react-router'
import App from './components/App'
import ImagesList from './components/images/ImageList'

//const body = document.getElementsByTagName('body')[0]
const appId = document.getElementById("app")

//ReactDOM.render(<App place="AliBoo"/>, body)

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="image/:id" component={ImagesList} />
    </Route>
  </Router>
),appId)
