import React, { Component } from 'react';
import {BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './components/register'
import Index from './components/index'
class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
      <nav className='navbar navbar-expand-lg navbar-light bg-light '>
      <Link to={'/'} className='navbar-brand'>React CRUD Example</Link>
      <div className='collapse navbar-collapse'>
      <ul className='navbar-nav mr-auto'>
       <li className='nav-item'>
       <Link to={'/'} className='nav-link'>Home</Link>
       </li>
       <li className='nav-item'>
       <Link to={'/register'} className='nav-link'>Register</Link>
       </li>
      </ul>
      </div>
      </nav><br/>
      <h2>React Full Stack Tutorial</h2><br/>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/register" component={Register}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
