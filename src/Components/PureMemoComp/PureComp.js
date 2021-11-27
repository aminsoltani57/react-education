import React, { PureComponent } from 'react';
class PureComp extends PureComponent{
    render() { 
        console.log("PureComp///")
        return <div>
            RegComp {this.props.name}
        </div>;
    }
}
 export default PureComp;