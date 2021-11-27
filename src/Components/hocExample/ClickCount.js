import WithCount from "../hoc/WithCount";

const ClickCount = ({count, incrementCount}) => {

    return ( <div>
        <h2 onClick={incrementCount}>clicked{count} times</h2>
    </div> );
}
 
export default WithCount(ClickCount, 5);