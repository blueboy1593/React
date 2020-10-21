import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC.js';
import Subject from './components/subject'
import Content from "./components/content"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:"read",
      selected_content_id:2,
      subject:{title:'생활코딩 제목', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'welcome to react!!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  
  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      var i = 0;
      while (i < this.state.contents.length){
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    console.log('render', this);
    return (
      <div className="App">
        생활코딩 따라하기!
        <Subject 
          title={this.state.subject.title} 
          description={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        />

        <TOC onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
        data={this.state.contents}/>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}


export default App;
