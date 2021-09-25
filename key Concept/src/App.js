import CounterContainer from './CounterContainer.js'
import './App.css';
import React from 'react';

function App() {

  //CSS Styling
const color={
  color:'blue',
  background :'yellow'
}

  //CSS Name and Value
  const style = {
  fontSize: 20,
  color: 'blue',
};

  return (
    <div>
      <p style={color}>CSS Styling</p>
      <p style={style}> Name and value CSS </p>
      <CounterContainer/>
      
    </div>
  );
}
class Birth extends React.Component {
  render() { 
    return <h1>{this.props.age}</h1> 
  }
}
 
Birth.PropTypes = {
  age: PropTypes.number
}

export default App;
