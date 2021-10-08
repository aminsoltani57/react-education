import styles from "./NavBar.module.css";

const NavBar = ({TotalPrice}) => {
    console.log("navbar.js render")
    return ( 
        <div className={styles.NavBar} >
            <h1 >this is products</h1>
            <span >{TotalPrice}</span>
            
            </div>
      );
}
 
export default NavBar;