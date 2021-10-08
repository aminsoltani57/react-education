import React from 'react';
//import Product from "./Components/Product/Product.js";
import CounterClass from './Components/ClassCounter/ClassCounter.js';
import ProductList from './Components/ProductList/ProductList.js';
import NavBar from './Components/NavBar/NavBar.jsx';
// import Product from './Components/Product/Product.js';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log("App.js constructor");
  }
  state = {
    Products: [
        {title:"react.js", price:"99 $", id:1, quantity: 1},
        {title:"node.js", price:"89 $", id:2, quantity:2},
       {title:"javascript", price:"79 $", id:3, quantity:3},
    ],
}; 
removeHanddler = (id) =>{
  //console.log("clicked", id);
const filterdProducts =  this.state.Products.filter((p) => p.id !== id);
this.setState({ Products: filterdProducts });
};
incrementHandler = (id)=>{
// //console.log("click", id);
// const Products=[...this.state.Products];
// const findItems= Products.find((p)=>p.id === id );
// //console.log(findItems);

// findItems.quantity ++;
// this.setState({Products});
const index=this.state.Products.findIndex(item => item.id ===id );
const product={...this.state.Products[index]};
product.quantity++;
const Products = [...this.state.Products];
Products[index]=product;
console.log(product);
this.setState({Products});

       };
decerementHandler = (id)=> {
// const Products=[...this.state.Products];
// const selectedItem= Products.find((p)=> p.id === id);
// if(selectedItem.quantity === 1){
    
//     const filteredItem= this.state.Products.filter((p)=> p.id!==id);
//     this.setState({Products:filteredItem});
// }
// else{
//     selectedItem.quantity--;
//     this.setState({Products});
    
//     } }
const index= this.state.Products.findIndex((item)=> item.id === id);
 const product={...this.state.Products[index]};
 if(product.quantity === 1){
   const filteredProduct= this.state.Products.filter((p)=> p.id !== id);
   this.setState({Products: filteredProduct});
 }
else{
  const Products=[...this.state.Products];
  product.quantity--;
  // const Products=[...this.state.Products];
  Products[index]=product;
  this.setState({Products});
}

 
};

  clickHandler = () =>{
//      // console.log("counclick", id);
//       //setState to update state
//      // this.setState({
//      //   Products: [
//          // {title:"react.js", price:"88 $"},
//       //    {title:"node.js", price:"77 $"},
//        //  {title:"javascript", price:"66 $"},
//      // ],
//      // })
  }
  //cdu
  componentDidUpdate(prevProps, prevState) {
  
    console.log("  app.js componentDidUpdate");

  console.log("  app.js componentDidUpdate", prevState);
  }
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }
  //cdm
  componentDidMount() {
    console.log("app.js componentDidMount");
    //ajax
    //products: this.setstate(products...)
  }
 
    render() {
     console.log("app.js render")
        return (
          <div>
     <NavBar TotalPrice={this.state.Products.filter((p)=> p.quantity > 0).length}
     />
       <CounterClass />
      <ProductList  
      Products={this.state.Products}
      onRemove={this.removeHanddler}
      onIncrement={this.incrementHandler}
      onDecerement={this.decerementHandler}
      />
      
<button onClick={()=> this.clickHandler()}>change price</button>
          </div> 
         
        
        );
    }
}

export default App;