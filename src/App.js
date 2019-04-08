import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Posts from './components/posts/Posts'
import PostShow from './components/posts/PostShow'
import Users from './components/Users/UserList'

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>

          <Navbar />

          <div className="container mt-3 mb-5">

            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
            <Route path="/posts" component={Posts} exact={true} />
            <Route path="/posts/:id" component={PostShow} />
            <Route path="/users" component={Users} exact={true} />
            <Route path="/contact" component={Contact} />

          </div>

        </div>
      </BrowserRouter>

    )
  }
}

export default App
