import React from 'react'
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import Home from './Home'
import Courses from './Courses'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Login from './Login'
import PrivateRoute from './PrivateRoute'

export const isAuthenticated = true

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/courses'>Courses</Link>
              </li>
              {isAuthenticated && (
                <>
                  <li>
                    <Link to='/dashboard'>Dashboard</Link>
                  </li>
                  <li>
                    <Link to='/profile'>Profile</Link>
                  </li>
                </>
              )}
              <li>
                <Link to='/login'>Log in</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path='/courses'>
            <Courses />
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path='/profile'>
            <Profile />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact to='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
