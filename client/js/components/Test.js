// client/js/components/Test.js

import 'stylesheets/base.sass'
import React, {PropTypes, Component} from 'react'
import {FormGroup, ControlLabel, FormControl, Clearfix, Grid, Row, Col, Panel, Button, Jumbotron} from 'react-bootstrap'
import Header from './layout/Header'

class Test extends Component{
  render() {
     
    return(
      <div>
        <div className="entry">
          <h1> This is Test Page </h1>
        </div>
      </div>
    );
  }
}

export default Test

