import React from 'react'

export default class Title extends React.Component {
    constructor(props){
        super(props)
      }
    render() {
        const { title, subTitle } = this.props
        return (
            <div>
                <h2 className='home_h2'>{title}</h2>
                <p className='home_p'>{subTitle}</p>
          </div>
        )
    }
}
