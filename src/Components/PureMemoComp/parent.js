// imrc
import React, { Component } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';
// cc
class Parent extends Component {
    state ={
        name:"shaaylin"
    }
  componentDidMount() {
      setInterval(()=>{ 
          this.setState({name:"saheb"})
        
      }, 9000)
  }
    render() { 
        console.log("parent....");
        return <div>
            <RegComp name={this.state.name} />
            <PureComp name={this.state.name} />
            <MemoComp name={this.state.name} />
            parent component
        </div>;
    }
}
 
export default Parent;