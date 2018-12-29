import React from 'react'
import { Router as ReachRouter, Redirect } from '@reach/router'
import routes from './routes'
import Home from '../pages/Home'
import Skills from '../pages/Skills'
import Work from '../pages/Work'
import NotFound from '../pages/NotFound'

const Router = () => (
  <ReachRouter>
    <Home path={routes.root} />
    <Skills path={routes.skills} />
    <Work path={routes.work} />
    <Redirect from={routes.home} to={routes.root} noThrow />
    <NotFound default />
  </ReachRouter>
)

export default Router
