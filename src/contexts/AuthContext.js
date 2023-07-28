import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 
 const AuthContext = createContext();

 export function AuthProvider({children}){
   const [isLoading,setisLoading] = useState(true)
  
    const Navigate = useNavigate()
    const [userRegistration,setuserRegistration] = useState({
        Firstname:"",
        Lastname:"",
        Email:"",
        Password:"",
       
      })
    
      const [userLogin,setuserLogin] = useState({
        Email:"",
        Password:"",
       user:{}
     
    
    }) 

    
    const handleGuestLogin = async()=>{
        setuserRegistration({
            Firstname:"Adarsh",
            Lastname:"Balika",
            Email:"adarshbalika@gmail.com",
            Password:"adarshbalika",
             
        })   
        try{
    
            const response = await fetch("/api/auth/login",
            {
                method:"POST",
                body:JSON.stringify({email:"adarshbalika@gmail.com", password:"adarshbalika"})
            })
           if(response.status===200){
        
            const {foundUser,encodedToken} = await response.json()
         
            setuserLogin((prev)=>({...prev,user:{...foundUser}}))
          
            localStorage.setItem("token",encodedToken)   
              toast.success("Login Successful ...!!")               
            Navigate("/product")
        }
        setisLoading(false) 
           
        }catch(e){
            console.error(e)
        }
    }


    const handleToLogin = async()=>{
    
        try{
    
            const response = await fetch("/api/auth/login",
            {
                method:"POST",
                body:JSON.stringify({email:userLogin.Email, password:userLogin.Password})
            })
           if(response.status===200){
        
            const {foundUser,encodedToken} = await response.json()
         
            setuserLogin((prev)=>({...prev,user:{...foundUser}}))
            toast.success("Login Successful ...!!")
            localStorage.setItem("token",encodedToken)   
          
            Navigate("/product")
        }
        setisLoading(false) 
           
        }catch(e){
            console.error(e)
        toast.error("Authentication fails..!!")

        }
    }
 
      
 
   const handleToSignUp =async()=>{

    if( userRegistration.Email === "" || userRegistration.Firstname === "" ||userRegistration.Lastname === "" ||userRegistration.Password === ""   )
     {
        toast.error("Not registered ...!!")
        console.log("error in registration")
    }else{
    
    try{
        const response = await fetch("/api/auth/signup",{
            method:"POST",
            body: JSON.stringify({email:userRegistration.Email , password:userRegistration.Password, Firstname:userRegistration.Firstname, Lastname:userRegistration.Lastname })
        }) 
        if(response.status === 201){
            Navigate("/signIn")
            toast.success("Registraion successful ...!!")
        
        }          
        setisLoading(false)
        
    }catch(e){
        console.error(e)
        toast.error("Fill all inputs")
    }
   }
   }
//   useEffect(()=>{localStorage.getItem("token")&&(()=>{ setuserRegistration({
//     Firstname:"Vivek",
//     Lastname:"Kumar",
//     Email:"adarshbalika@gmail.com",
//     Password:"adarshbalika",
//     HouseNo:"180/28",
//     City:"Gurugram",
//     State:"Haryana",
//     Country:"India",
//     Phoneno:"9045768943"
// })
//     setuserLogin({
//         Email:"adarshbalika@gmail.com",
// Password:"adarshbalika",
//     })})()},[])

< ToastContainer/>
     

  
    return(
        
        <AuthContext.Provider value={{handleToSignUp,handleToLogin,userRegistration,isLoading,setisLoading,setuserRegistration,setuserLogin,handleGuestLogin}} >
            {children}
        </AuthContext.Provider>
    )
 }

 export const useAuth= () => useContext(AuthContext)