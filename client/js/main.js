import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom'
import App from './components/App'
import Test from './components/Test'
import ImagesList from './components/images/ImageList'

//const body = document.getElementsByTagName('body')[0]
const appId = document.getElementById("app")

//ReactDOM.render(<App place="AliBoo"/>, body)

const BasicExample = ()=>(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/doctor">Doctor</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={App}/>
      <Route path="/doctor" component={Test}/>
    </div>
  </Router>
)

ReactDOM.render(<BasicExample /> ,appId)
