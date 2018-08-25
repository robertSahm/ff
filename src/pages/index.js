import React from 'react'
import PropTypes from 'prop-types'
import logo from '../img/logo.png'
import goat from '../img/goat.png'
import ff from '../img/frenchtownfarms.png'

export default class IndexPage extends React.Component {
  render() {
    return (
      <section className="home-section">
        <img className="logo" src={logo} alt="frenchtown farms logo" />
        <img className="goat" src={goat} alt="frenchtown farms logo" />
        <img className="ff" src={ff} alt="frenchtown farms logo" />
        <p className="message">
          We're too busy farming to finish our website right now, 
          but you can find us at :
        </p>
        <p className="social">@frenchtownfarms on Instagram and facebook</p>
        <p className="email">aaron@frenchtownfarms.com and cara@frenchtownfarms.com</p>
      </section>
    )
  }
}

