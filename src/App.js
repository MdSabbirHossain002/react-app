import React from 'react';
import Card from './components/Card/Card'
import Data from './data.json';
import Book from './components/Book/Book'
import State from './components/State/State'
import Clock from './components/Clock/Clock'
import Event from './components/Event/Event'

/*var items = [];
for(var x = 0;x<Data.length;x++){
  items.push(<Card title={Data[x].title}/>);
}*/
function App(){
  //{Data.map((item, index)=> <Card key={index} title={item.title} />)}
  //<Card title={Data[0].title} />
  return <div className="container">
    {Data.map((item, index)=> <Card keys={index} title={item.title} />)}
    <Book name="Spanish" />
    <State />
    <Clock local="bn-BD"/>
    <Event />
  </div>
}

export default App;
