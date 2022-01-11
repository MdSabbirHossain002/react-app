import React,{Component} from 'react'

class Book extends Component {
  render(){
    return <div className="book">book {this.props.name}</div>
  }
}
export default Book;
