import React, { useState } from 'react';

import CounterClass from './Components/ClassCounter/ClassCounter.js';
import ProductList from './Components/ProductList/ProductList.js';
import NavBar from './Components/NavBar/NavBar.jsx';
import Filter from './Components/Filter/Filter.jsx';

import NewUseEffect from './Components/NewUseEffect/NewUseEffect.js';
import ClearComponent from './Components/ClearComponent/ClearComponent.jsx';
// import Wrapper from './Components/hoc/Wrapper.js';
import Wrapper from './Components/hoc/Wrapper.js';
import ClickCount from './Components/hocExample/ClickCount.js';
import MouseOverCount from './Components/hocExample/MouseOverCount.js';
import Parent from './Components/PureMemoComp/parent.js';
import ClassRef from './Components/Ref/ClassRef.js';
import FunctionalRef from './Components/Ref/FunctionalRef.jsx';
import PreviousStateStore from './Components/Ref/PreviousStateStore.js';
import FunctionalContex from './Components/Context/FunctionalContex.jsx';
import ContexProvider from './Components/Context/ContextProvider.jsx';
import CounterOne from './Components/Context/CounterOne.jsx';
import CountReducer from './Components/Reducer/countReducer.js';
import MultipleStateReducer from './Components/Reducer/MultipleStateReducer.js';
// import MultipleUseReducer from './Components/Reducer/MultipleStateReducer.js';
import ProductsProvider, {useProducts, useProductsActions} from './Components/Providers/ProductsProviders.jsx';
// export const UserContext=React.createContext();

const Appp = () => {
   
    
        // const [isShow, setIsShow]=useState(true);
    
    return (
         
        <>
        <ProductsProvider>
        {/* <MultipleStateReducer />
     
        <CountReducer />
    <ContexProvider >
      <p> WELCOME TO CONTEXT</p>
      <CounterOne /> 
    </ContexProvider>
       <UserContext.Provider value={"AMINSOLTOON"} >
        <ClickCount name="amin" />
        <MouseOverCount />
        <Parent />
        <ClassRef />
        <FunctionalRef /> */}
        
          {/* {isShow && <ClearComponent />}
          <button onClick={()=>setIsShow({isShow: !isShow})}>{isShow ? "hide" : "show"}</button> */}
           
   <NavBar />
   <Filter />
     {/* <CounterClass />
   <NewUseEffect /> */}
    <ProductList />
{/*   
<button onClick={()=> clickHandler()}>change price</button> */}
{/* <PreviousStateStore />
<FunctionalContex />
</UserContext.Provider> */}
</ProductsProvider>
        </> 
    )
    }
    // export default Wrapper(Appp, "container");
    export default Appp;