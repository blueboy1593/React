import React, {Component} from 'react';
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";
import './App.css';

class App extends Component {
  state={number:0}
  render(){
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
}

// 필요 없어진 코드
// onClick={function(size){
//   this.setState({number:this.state.number + size});
// }.bind(this)}
// number={this.state.number}

export default App;
