import React,{Component} from 'react'

class State extends Component {
  constractor(){
    
    this.state={
      count :0
    }
  }
  render(){
    const {count} = this.this.state
    const plus = () =>{
      this.setState({
        count : this.state.count +1
      })
    }
    const minus = () =>{
      this.setState({
        count : this.state.count -1
      })
    }
    return <div className="container">
      <div>Count (0-10): {count}</div>
      <div className="button" onClick={plus} disabled={count == 10 ? true : false}>+</div>
      <div className="button" onClick={plus} disabled={count == 0 ? true : false}>-</div>

    </div>
  }
}
export default State;
