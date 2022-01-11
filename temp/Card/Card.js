import React,{Component} from 'react'

function Card(props){
  const {title}=this.props
  return <div className='Container'>
    <div className="title">{title}</div>
  </div>
}
export default Card;
