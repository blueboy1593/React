import React, {Component} from "react";
import store from "../store"
export default class DisplayNumber extends Component {
  state = {number:store.getState().number}
  // state 값을 기본적으로 세팅
  constructor(props){
    super(props);
    store.subscribe(function(){
      this.setState({number:store.getState().number});
    }.bind(this));
  }
    render() {
      return (
        <div>
          <h1>Display Number</h1>
          {/* 여기서 이제 전 component의 props가 아닌 store에서 가져와야 한다. */}
          <input type="text" value={this.state.number} readOnly></input>
        </div>
      )
    }
  }