import { createContext, useContext, useState } from "react";



export const WishlistContext = createContext();

export function WishlistProvider({children}){
 const token = localStorage.getItem("token")
 const [wishlistItem,setWishlistItem]= useState([])

    const handleAddToWishlist = async(product)=>{
      
        try{
        const response = await fetch("/api/user/wishlist",
        
        {
            method:"POST",
             headers: ({authorization: token }),
             body: JSON.stringify({product}),
        })  

         
        setWishlistItem(await response.json())
         console.log(wishlistItem,"wishlist cart")             
        }catch(e){
            console.error(e)
        }

    }

    const handleRemoveFromWishlist = async(product)=>{
        try{

            const response = await fetch(`/api/user/wishlist/${product._id}`,{
                method:"DELETE",
                headers: ({authorization: token}),
            });

            setWishlistItem(await response.json())

        }catch(e){
            console.error(e)
        }
    }

    return(
        <WishlistContext.Provider value={{handleRemoveFromWishlist,handleAddToWishlist,wishlistItem}} >
            {children}
        </WishlistContext.Provider>

    )
}

export const useWishlist = () => useContext(WishlistContext);