
import React, {Component} from 'react'

class Button extends Component {
  shouldComponentUpdate(nextProps){
    const {change: currentChange} = this.props
    const {change: nextChange} = nextProps
    if (currentChange===nextChange) {
      return false;
    } else {
      return true;
    }
  }

  render(){
   
    console.log('button rendered');
    return (
      <button type='button' onClick={this.props.change}>Click to count</button>
    )
  }
}
export default Button ;