import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

import { isAuthenticated } from './App'

const PrivateRoute: React.FC<RouteProps> = ({ children }) => {
  if (!isAuthenticated) return <Redirect to='/login' />

  return <Route>{children}</Route>
}

export default PrivateRoute
