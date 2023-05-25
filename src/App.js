import './App.css';
import Products from './Product';
import { Component } from 'react';

class App extends Component

{

  constructor()
  {
    super();
    this.state={
      title:'React App',
      userInput:'User text here'
    }
  }

  inputChange(event)
  {
    this.setState({userInput:event.target.value? event.target.value:'User text here'})
  }

  render(){
    return (
      <div>
        <center> <h1>Music Store</h1>
        <center>
          <input placeholder='Please Enter User Search' onChange={this.inputChange.bind(this)}/>
        </center>
        <p>{this.state.userInput}</p>
        </center>
        <hr/>
       <Products/>
      </div>
    )
  }
}




export default App;
