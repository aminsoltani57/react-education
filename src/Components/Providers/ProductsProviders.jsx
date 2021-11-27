import React, { useReducer } from "react";
import { useContext } from "react";
import { useState } from "react/cjs/react.development";

import { productsData } from "../../db/products";
 const ProductsContext=React.createContext(); //state
 const ProductsContextDispatcher=React.createContext(); //setState

//  const initialState=[
//   {title:"react.js", price:"99 $", id:1, quantity: 1},
//   {title:"node.js", price:"89 $", id:2, quantity:2},
//  {title:"javascript", price:"79 $", id:3, quantity:3},
// ];
 
 const reducer=(state, action)=>{
        switch(action.type){
            case "increment":{
              const index=state.findIndex(item => item.id ===action.id );
              const product={...state[index]};
              product.quantity++;
              const updatedProducts = [...state];
              updatedProducts[index]=product;
              
              
              return updatedProducts;
            }

                case "decrement":{
                  const index= state.findIndex((item)=> item.id === action.id);
                  const product={...state[index]};
                  if(product.quantity === 1){
                    const filteredProduct= state.filter((p)=> p.id !== action.id);
                    return filteredProduct;
                  }
                 else{
                   const updatedProducts=[...state];
                   product.quantity--;
                   // const Products=[...Products];
                   updatedProducts[index]=product;
                   return(updatedProducts);
                 }
                  
                }
                    case "delete":{
                      const filterdProducts =  state.filter((p) => p.id !== action.id);
                      return(filterdProducts);
                      
                    }
                    case "filter":{
                      if(action.event.target.value === ""){
                        return productsData;
                      }
                      else{
                        const updatedProduct=productsData.filter(p=>p.availableSizes.indexOf(action.event.target.value)>= 0);
                        return updatedProduct
                      }
                    
                      ;}
                        default:
                            return state;
        }
    }
 

const ProductsProvider = ({ children }) => {
   const [Products, dispatch]=useReducer(reducer, productsData);

    return (  
<ProductsContext.Provider value={Products}>
    <ProductsContextDispatcher.Provider value={dispatch}>
{children}
</ProductsContextDispatcher.Provider>
</ProductsContext.Provider>
    );
}
 
export default ProductsProvider;

   export const useProducts=()=>useContext(ProductsContext);
   export const useProductsActions=()=>{
       return useContext(ProductsContextDispatcher);
    //    const Products= useContext(ProductsContext);
    //    const removeHanddler = (id) =>{
    //     //console.log("clicked", id);
    //   const filterdProducts =  Products.filter((p) => p.id !== id);
    //   setProducts(filterdProducts);
      
    //   };
    //   const incrementHandler = (id)=>{
    //   // //console.log("click", id);
    //   // const Products=[...Products];
    //   // const findItems= Products.find((p)=>p.id === id );
    //   // //console.log(findItems);
      
    //   // findItems.quantity ++;
    //   // setState({Products});
    //   const index=Products.findIndex(item => item.id ===id );
    //   const product={...Products[index]};
    //   product.quantity++;
    //   const updatedProducts = [...Products];
    //   updatedProducts[index]=product;
    //   console.log(Products);
    //   setProducts(updatedProducts);
      
      
    //          };
    //  const decerementHandler = (id)=> {
    //   // const Products=[...Products];
    //   // const selectedItem= Products.find((p)=> p.id === id);
    //   // if(selectedItem.quantity === 1){
          
    //   //     const filteredItem= Products.filter((p)=> p.id!==id);
    //   //     setState({Products:filteredItem});
    //   // }
    //   // else{
    //   //     selectedItem.quantity--;
    //   //     setState({Products});
          
    //   //     } }
    //   const index= Products.findIndex((item)=> item.id === id);
    //    const product={...Products[index]};
    //    if(product.quantity === 1){
    //      const filteredProduct= Products.filter((p)=> p.id !== id);
    //      setProducts( filteredProduct);
    //    }
    //   else{
    //     const updatedProducts=[...Products];
    //     product.quantity--;
    //     // const Products=[...Products];
    //     updatedProducts[index]=product;
    //     setProducts(updatedProducts);
    //   }
      
      
    //   };
    //   return {decerementHandler, incrementHandler, removeHanddler};
      // const  clickHandler = () =>{
      //      // console.log("counclick", id);
      //       //setState to update state
      //      // setState({
      //      //   Products: [
      //          // {title:"react.js", price:"88 $"},
      //       //    {title:"node.js", price:"77 $"},
      //        //  {title:"javascript", price:"66 $"},
      //      // ],
      //      // })
        // }
    
}
   

    //    const setCount=useContext(ProductsContextDispatcher);
    //    const addOne=()=>{
    //        setCount((prevCount)=>prevCount + 1)
    //    }
    //    const addFive=()=>{
    //     setCount((prevCount)=>prevCount + 5)
    // }
    // const decrement=()=>{
    //     setCount((prevCount)=>prevCount - 1)
    // }
    // return{addOne, addFive, decrement}
    
    