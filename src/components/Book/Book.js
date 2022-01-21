
import React, {Component} from 'react'
class Book extends Component {
  //const element ;

  render(){
    var element;


    var title = <h3>Book</h3>;
    if(this.props.name === 'Bangla'){
      element = (<div className="container">
            {title}<br/>book written in language ='{this.props.name}'
      </div>);
      return element;
    }else{
      element = (<div className="container">
            {title}<br/>book written in language ='{this.props.name}'
      </div>);
      return element;
    }
    //return {element}
  }
}
export default Book ;
