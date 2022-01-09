import React, {Component} from 'react'

class Event extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
    //this.handleClick = this.handleClick.bind(this)
  }
  handleClick(number){
    this.setState({
      count:this.state.count + number    })
  }
  render(){
    //e.preventDefault();

    let {count} = this.state
    return <div className="container">
    {count}
    <button className="button" type="button" onClick={this.handleClick.bind(this,4)}>
                                                      //{()=> this.handleClick(parameters)}

    Event Handeller
    </button>
    </div>
  }
}
export default Event ;
