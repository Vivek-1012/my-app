import { createContext, useContext, useEffect, useState } from "react";

import { useAuth } from "./AuthContext";


export const DataContext = createContext();
 
export function DataProvider({children}){
    const [productList,setProductList] = useState([])
    const [categoriesList, setCategoriesList]= useState([])
    const [input, setInput]= useState("");
    const [selectCategories,setSelectCategories]=useState("");
  const{isLoading,setisLoading} =useAuth();
     
     const fetchCategory = async()=>{
             
        try{ 
             const response = await fetch("/api/categories")
             setCategoriesList(await response.json())
             setisLoading(false)   
        }catch(e){
            console.error(e)
        }



        try{
            setisLoading(true)
            const response = await fetch("/api/products")
            setProductList(await response.json())
            setisLoading(false)
        }catch(e){

        }
     }
    
     useEffect(()=>{fetchCategory()},[])

     const inputHandler = (event) => {setInput(event.target.value);
     
    }

    if(isLoading){
        return  <div className="loaderLayout" ><div class="loader"></div></div>
    }

    

         
    return(
    <DataContext.Provider value={{inputHandler,selectCategories,setSelectCategories,categoriesList,input,setInput,productList}} >
        {children}
    </DataContext.Provider>

    )
}

export const useData = () => useContext(DataContext);
