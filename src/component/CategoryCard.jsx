import React, { Component } from 'react'

export default class CategoryCard extends Component {
    render() {
    const { img, name } = this.props
    return (
      <div className='card_home'>
        <img src={ img } alt="" />
        <p>{name}</p>
      </div>
    )
  }
}
