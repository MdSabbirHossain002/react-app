
import React, {Component} from 'react'

class Clock extends Component {
  constructor(props){
    super(props);
    this.state ={
      hour : new Date().getHours(),
      min : new Date().getMinutes(),
      sec : new Date().getSeconds(),
      
    }
  }
  //state:{name:x,age:30} //if props not used in state
  componentDidMount(){
   this.clockTimer = setInterval(()=>this.tick(),1000)
  }
  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }
  tick(){
    this.setState({
        hour : new Date().getHours(),
        min : new Date().getMinutes(),
        sec : new Date().getSeconds(),

      })
  }
  render(){

    return <div className="container">
      now time is: {this.state.hour}:{this.state.min}:{this.state.sec}

    </div>
  }
}
export default Clock ;
