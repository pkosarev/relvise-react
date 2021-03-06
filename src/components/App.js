import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './css/style.css'

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <Header />
          <Main />
          <Footer />
      </div>
    )
  }
}