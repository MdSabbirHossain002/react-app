import React, {Component} from 'react'
import Button from './Button'
class Event extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
    //this.handleClick = this.handleClick.bind(this)
  }
  handleClick = (number)=>{
    //var num = parseInt('2')
    this.setState({
      count:this.state.count + 2//number
    })
  }
  render(){
    //e.preventDefault();

    let {count} = this.state
    return <div className="container">
    {count}

    <Button change={this.handleClick} number='2' />
    </div>
  }
}
export default Event ;
/*{this.handleClick.bind(this,4)}
//{()=> this.handleClick(parameters)}*/
