import { useState,createContext } from "react";
import singleproduct from "../data/shopproducts";





export const ProductContext = createContext(null);

export const ProductProvider = (props)=>{
    const [product,setProducts] = useState(singleproduct);

    return(
        <ProductContext.Provider value={[product,setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}
