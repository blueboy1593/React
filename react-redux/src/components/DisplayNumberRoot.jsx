import React, {Component} from "react";
import DisplayNumber from "../components/DisplayNumber";
export default class DisplayNumberRoot extends Component{
    state = {number:0}
    render(){
      return (
        <div>
          <h1>Display Number Root</h1>
          <DisplayNumber></DisplayNumber>
        </div>
      )
    }
  } 