import React, {Component} from "react";

export default class DisplayNumber extends Component {
    render() {
      return (
        <div>
          <h1>Display Number</h1>
          {/* 여기서 이제 전 component의 props가 아닌 store에서 가져와야 한다. */}
          <input type="text" value={this.props.number} readOnly></input>
        </div>
      )
    }
  }