import React from "react";

const MemoComp = (props) => {
    console.log("memo components")
    return ( <div>
        MemoComp {props.name}
    </div>);
}
 
export default React.memo(MemoComp);