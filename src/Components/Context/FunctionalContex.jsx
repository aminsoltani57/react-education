import { useContext } from "react";
import { UserContext } from "../../App";

const FunctionalContex = () => {
    const user=useContext(UserContext);
    console.log(user);
    return ( <div>

    </div> );
}
 
export default FunctionalContex;