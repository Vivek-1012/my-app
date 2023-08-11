import { createContext, useContext, useEffect, useState } from "react";

import { useAuth } from "./AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DataContext = createContext();
 
export function DataProvider({children}){
    const [productList,setProductList] = useState([])
    const [categoriesList, setCategoriesList]= useState([])
    const [input, setInput]= useState("");
    const [selectCategories,setSelectCategories]=useState([]);
    const{isLoading,setisLoading} =useAuth();
   
  const [addressRecord,setaddressRecord] = useState([])
  const [selectPriceRange,setSelectPriceRange] = useState(0);
  const [AddAddressForm,setAddAddressForm] = useState({HouseNo:"",Locality:"",City:"",Pincode:"",State:"",District:""})
  const [selectRating, setSelectRating] = useState("");
  const [selectSortBy,setSelectSortBy]= useState("")
  const [AddAdressDiv,setAddAdressDiv] = useState(false)    
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

    
    let setStore = productList.products; 


  
  
    //event handlers
     const handlerToCLear = () =>{
      setSelectPriceRange(0);
      setSelectSortBy("")
      setSelectRating("")
      setInput("")
      setSelectCategories("")
    }
    
    
    const handlerPriceRangeChange = (event)=> setSelectPriceRange(event.target.value)
     
    const handlerSortByChange = (event) => setSelectSortBy(event.target.value);
       
    const handlerRateByChange = (event) =>setSelectRating(event.target.value)
    
     
      
      const handlerCategoriesChange = (event) => {
        const categoryValue = event.target.value;
      
        if (!selectCategories.includes(categoryValue)) {
          setSelectCategories((prev) => [...prev, categoryValue]);
        } else {
          setSelectCategories((prev) => prev.filter(item => item !== categoryValue));
        }
      };
    
    
    if(selectCategories){
      setStore = setStore.filter(lst=> selectCategories.includes(lst.categoryName))
    }
    
    
    
    
    if(selectPriceRange){
      setStore = setStore?.filter(lst=> lst.price >= selectPriceRange)
    }
    
     
    if(input){
      setStore = input === "" ? setStore : setStore.filter((lst) => lst.title.toLowerCase().includes(input.toLowerCase()));
      }
    
    
    
     if(selectRating){
      setStore = setStore.filter(lst=> lst.rating >= JSON.parse(selectRating) )
     }
    
    
    if(selectSortBy){
      if(selectSortBy==="All"){
        setStore = selectSortBy === "All"? setStore : "";
      }if(selectSortBy === "Low"){
        setStore.sort((a,b)=> b.price - a.price)
      }if(selectSortBy === "High"){
        setStore.sort((a,b)=> a.price - b.price)
      }
    }
    
    const handleAddressInput = (e) =>{
   
      const name = e.target.name;
   const value = e.target.value;
   setAddAddressForm({...AddAddressForm, [name]: value })
    }
    <ToastContainer /> 
   const handleAddressSubmit=(e)=>{
    if(AddAddressForm.City === "" || AddAddressForm.HouseNo === "" || AddAddressForm.Locality === "" || AddAddressForm.State === "" || AddAddressForm.District === "" || AddAddressForm.Pincode === ""   ){
      e.preventDefault()
      
      toast.warn("Enter all the fields")
      
    } else{
    e.preventDefault();
    toast.success("Address added")
    const newRecord = {...AddAddressForm,id:
       new Date().getTime().toString()  }

       setaddressRecord([...addressRecord, newRecord]);
       setAddAdressDiv(false)
      setAddAddressForm({HouseNo:"",Locality:"",City:"",Pincode:"",State:"",District:""})
     } }
  

     console.log(addressRecord)
         
    return(
    <DataContext.Provider value={{AddAdressDiv,setaddressRecord,setAddAdressDiv,addressRecord,handleAddressSubmit,AddAddressForm,setAddAddressForm,inputHandler,handlerToCLear,selectCategories,setStore,setSelectCategories,categoriesList,input,setInput,productList,handlerSortByChange,handlerPriceRangeChange,handlerRateByChange,handlerCategoriesChange,selectRating,selectCategories,selectSortBy,selectPriceRange,handleAddressInput}} >
        {children}
    </DataContext.Provider>

    )
}


export const useData = () => useContext(DataContext);
