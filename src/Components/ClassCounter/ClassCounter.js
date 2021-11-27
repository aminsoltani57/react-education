// imrc
import React, { Component } from 'react';
//cc
class CounterClass extends Component {
   
    state = {
        count: 0,
    };
    addoneHandler = (id) => {
        console.log("clicked", id);
       this.setState((prevCount)=>{
           return{ count:prevCount.count + 1};
       });
      };
   
    render() { 
        return <div >
            <h2>{this.state.count}</h2>
<button onClick={()=>this.addoneHandler(2)}>add one</button>
        </div>;
    }
}
 
export default CounterClass;
