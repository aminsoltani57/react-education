
import { useProducts } from "../Providers/ProductsProviders";
import styles from "./NavBar.module.css";

const NavBar = () => {
    
    const Products=useProducts();
    const TotalPrice=Products.filter((p)=> p.quantity > 0).length; 
    return ( 
        <div className={styles.NavBar} >
            <h1 >this is products</h1>
            <span >{TotalPrice}</span>
            
            </div>
      );
}
 
export default NavBar;