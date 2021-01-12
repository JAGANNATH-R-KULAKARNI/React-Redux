

import React,{Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import Radium,{StyleRoot} from 'radium';

class App extends Component
{
  state={
    UserInput : ''
  }

  inputChangedHandler =(event)=>
  {
    this.setState({UserInput: event.target.value});
  }

  deleteCharHandler=(index)=>
  {
    const text=this.state.UserInput.split('');
    text.splice(index,1);
    const updatesText=text.join('');
    this.setState({UserInput:updatesText});
  }

  render()
  {
    const charList=this.state.UserInput.split('').map((ch,index)=>
    {
      return <Char character={ch} key={index} clicked={()=>this.deleteCharHandler(index)} />;
    }
    );

    return (
      <StyleRoot>
      <div className="App">
        <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}/>
        <p>{this.state.UserInput}</p>
        <Validation inputLength={this.state.UserInput.length} />
        {charList}
      </div>
      </StyleRoot>
    );
  }
}

export default App;