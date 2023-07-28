import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();


export function CartProvider({children}){
    
   const token = localStorage.getItem("token");   
   const [cartList, setCartList] = useState([]);    
   const [finalAmount,setfinalAmount] = useState(0);
   const [discountedAmount,setDiscountedAmount] = useState()  

  const handleAddToCart = async(product)=>{
    <ToastContainer /> 
       
    
   try{
        const response = await fetch("/api/user/cart",{
        method:"POST",
        headers: ({authorization: token }),
        body: JSON.stringify({ product }),
     })
      
     setCartList(await response.json()); 
     toast.success("Added to Cart!")
     
    }
     catch(e){
        console.error(e)
     }
   }

   const handleRemoveFromCart = async(product)=>{
    
       try{
        const response = await fetch(`/api/user/cart/${product._id}`,{
            method:"DELETE",
            headers:({authorization: token }),
        });

        setCartList(await response.json()); 
     toast.success("Remove from Cart!")
      
    }catch(e){
        console.error(e)
    }
   } 
  

   // also add for cart INC AND DEC

  const handleQuantityForCart = async(product,updateItem)=>{
    

    try{
        const response = await fetch(`/api/user/cart/${product._id}`,{

            method:"POST",
            headers:({authorization: token }),
            body: JSON.stringify({action:{ type: updateItem }}) 
        })

        setCartList(await response.json(),"quantity")

    }catch(e){
        console.error(e)
    }finally{
    
    }
  }


  
 

   return(<CartContext.Provider  value={{handleRemoveFromCart,finalAmount,discountedAmount,setDiscountedAmount,setfinalAmount,token,handleAddToCart,cartList,handleQuantityForCart}} >
    {children}
   </CartContext.Provider>

   ) 

}

export const useCart = () => useContext(CartContext);