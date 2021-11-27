import { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProviders";

const Filter = () => {
    const [value, setValue]=useState("");
    const dispatch=useProductsActions();
    const changeHadndler=(e)=>{
        dispatch({type:"filter",  event:e})
        setValue(e.target.value);
    }
    
    return (  
        <div>
            <p>this is filter products</p>
            <div>
                <select onChange={changeHadndler} value={value}>
                    <option value="">ALL</option>
                    <option value="S">S</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    );
}
 
export default Filter;