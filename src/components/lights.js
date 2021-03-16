import React from 'react';
// import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';
const red = '#ff1e12';
const white = 'fff'

class Lights extends React.Component{
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
    
    if (this.state.color===green){
      this.setState({color: yellow})
    }
    
    if (this.state.color===yellow){
      this.setState({color: red})
    }
    
    if (this.state.color===red){
      this.setState({color: green})
    }
      
  }
  render(){
    return(
      <div style={{background: this.state.color}}>
      <h1>Change my color</h1>
      <button onClick={this.changeColor}>Click</button>
      </div>
    )
  }
}
export default Lights;