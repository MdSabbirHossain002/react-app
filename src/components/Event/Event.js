
import React, {Component} from 'react'
import Button from './Button'
class Event extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0,
      number:1
    }
    //this.handleClick = this.handleClick.bind(this)
  }
  handleClick = ()=>{
    //var num = parseInt('2')
    this.setState({
      count:this.state.count + this.state.number//number
    })
  }
  incr(){
    this.setState({
      number :this.state.number + 1
    })
  }
  render(){
    //e.preventDefault();

console.log('event rendered')
    let {count} = this.state
    return <div className="container">
      <h3>Event</h3>
    {count}

    <Button change={this.handleClick} />
    <button type="button" onClick={this.incr.bind(this)}>increase difference ({this.state.number})</button>
    </div>
  }
}
export default Event ;
/*{this.handleClick.bind(this,4)}
//{()=> this.handleClick(parameters)}*/
