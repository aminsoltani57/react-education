
import React from 'react';
//import { render } from 'react-dom';
import Product from '../Product/Product';
import{ useProducts, useProductsActions } from '../Providers/ProductsProviders';


// /
 
//   componentDidUpdate(prevProps, prevState) {
  
//     console.log("  productlist.js componentDidUpdate")
//   }
  
 
//   render(){
//     console.log("productlist.js render")
//     const { onDecerement, onRemove, onIncrement, Products } = props;
//         if (Products.length ===0){
//             return <div> there is no product. go shopping</div> }
//         return( <div>
//             {Products.map((product, index) => {
//     return(<Product product={product}     
//       key={index}
//       onIncrement={ ()=> onIncrement(product.id)} 
//       onDelete={ () => onRemove(product.id)} 
//       onDecerement={()=>onDecerement(product.id)} />
//     );
//             })}

//         </div>);
//     }

// }
// export default ProductList;
const ProductList = (props) => {
    const Products=useProducts();
    
    // const {decerementHandler, incrementHandler, removeHanddler}=useProductsActions();
const dispatch=useProductsActions();
   
   const renderProduct=()=>{
       if(Products.length === 0 ) return<div> there is no product in cart </div>
return Products.map((product, index)=>{
    return(
        <Product 
        product={product}
        key={index}
        // onDelete={()=>removeHanddler(product.id)}
        // onDecrement={()=>decerementHandler(product.id)}
        // onIncrement={()=>incrementHandler(product.id)}
        onDelete={()=>dispatch({type:"delete", id:product.id})}
        onIncrement={()=>dispatch({type:"increment", id:product.id})}
        onDecrement={()=>dispatch({type:"decrement", id:product.id})}

        
    //     onRemove={()=>removeHanddler(Products.id)}
    // onIncrement={()=>incrementHandler(Products.id)}
    // onDecerement={()=>decerementHandler(Products.id)}
        // onChange={(e)=> onChange(e, product.id)}
        />
    );
    }); 
}

   
return (<div>
{!Products.length &&<div> go to shopping</div>}
{renderProduct()}
    </div>)
   

}



export default ProductList;
