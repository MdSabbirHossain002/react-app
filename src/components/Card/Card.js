import React from 'react'

function Card(props){
  //const {title}=this.props
  return <div className='container'>
      <h3>Card {props.keys +1}</h3>
      {props.title}
  </div>
}
export default Card;
