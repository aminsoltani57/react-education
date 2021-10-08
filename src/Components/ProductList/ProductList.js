
import React from 'react';
//import { render } from 'react-dom';
import Product from '../Product/Product';


class ProductList extends React.Component {
 
  componentDidUpdate(prevProps, prevState) {
  
    console.log("  productlist.js componentDidUpdate")
  }
  
 
  render(){
    console.log("productlist.js render")
    const { onDecerement, onRemove, onIncrement, Products } = this.props;
        if (Products.length ===0){
            return <div> there is no product. go shopping</div> }
        return( <div>
            {Products.map((product, index) => {
    return(<Product product={product}     
      key={index}
      onIncrement={ ()=> onIncrement(product.id)} 
      onDelete={ () => onRemove(product.id)} 
      onDecerement={()=>onDecerement(product.id)} />
    );
            })}

        </div>);
    }

}
export default ProductList;
