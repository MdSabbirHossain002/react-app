
import React, {Component} from 'react'
//import './style.css'

class State extends Component {
  constructor(){
    super()
    this.state = {
      count : 0
    }
  }

  render(){
    const {count} = this.state
    const plus = ()=>{
      this.setState({
        count : this.state.count + 1
      })
    }
    const minus = ()=>{
      this.setState({
        count : this.state.count - 1
      })
    }

    return <div className="container">
      <h3>State</h3>
      <div>Count (0 - 10): {count}</div>
      <button className="button" onClick={plus} disabled={count ===10 ? true : false}>+</button>
      <button className="button" onClick={minus} disabled={count ===0 ? true : false}>-</button>
    </div>
  }
}
export default State ;
