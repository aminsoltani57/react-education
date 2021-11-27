
import WithCount from "../hoc/WithCount";
const MouseOverCount = ({count, incrementCount}) => {

    return ( <div>
        <h2 onMouseOver={incrementCount}>clicked{count} times</h2>
    </div> );
}
 
export default WithCount(MouseOverCount, 10);