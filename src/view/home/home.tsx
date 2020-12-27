import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Switch, HashRouter as Router, Route } from 'react-router-dom'
import { Items } from 'view/items/Items';
import {Frame} from '../frame/Frame';
import {Blog} from '../blog/Blog';


type Props = {}

const Home1: React.FC<Props> = (props) => {
  return (
    <>
      <Frame>
        <Router>
          <Switch>
            <Route exact path="/">
              <Items/>
            </Route>
            <Route exact path="/items">
              <Items/>
            </Route>
            <Route exact path="/blog">
              <Blog/>
            </Route>
          </Switch>
        </Router>
      </Frame>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    n: state.n
  }
}

const mapDispatchToProps = {
  add1: () => {
    return {type: 'add', payload: 1}
  }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(Home1)

export {Home}