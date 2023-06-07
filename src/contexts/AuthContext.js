import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


 
 const AuthContext = createContext();

 export function AuthProvider({children}){
   const [isLoading,setisLoading] = useState(true)
  
    const Navigate = useNavigate()
    const [userRegistration,setuserRegistration] = useState({
        Firstname:"",
        Lastname:"",
        Email:"",
        Password:"",
        HouseNo:"",
         City:"",
        State:"",
        Country:"",
        Phoneno:""
      })
    
      const [userLogin,setuserLogin] = useState({
        Email:"",
        Password:"",
       user:{}
     
    
    }) 

    const handleGuestLogin= () => {
        setuserRegistration({
            Firstname:"Vivek",
            Lastname:"Kumar",
            Email:"adarshbalika@gmail.com",
            Password:"adarshbalika",
            HouseNo:"180/28",
            City:"Gurugram",
            State:"Haryana",
            Country:"India",
            Phoneno:"9045768943"
        })
            setuserLogin({
                Email:"adarshbalika@gmail.com",
        Password:"adarshbalika",
            })
            handleToLogin()  
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
            localStorage.setItem("token",encodedToken)   
            Navigate("/product")
        }
        setisLoading(false) 
           
        }catch(e){
            console.error(e)
        }
    }
 
      
 
   const handleToSignUp =async()=>{
    
    try{
        const response = await fetch("/api/auth/signup",{
            method:"POST",
            body: JSON.stringify({email:userRegistration.Email , password:userRegistration.Password,Firstname:userRegistration.Firstname, Lastname:userRegistration.Lastname })
        }) 
        if(response.status === 201){
            Navigate("/signIn")
            console.log("Signup")
        
        }          
        setisLoading(false)
        
    }catch(e){
        console.error(e)
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

     

  
    return(
        
        <AuthContext.Provider value={{handleToSignUp,handleToLogin,userRegistration,isLoading,setisLoading,setuserRegistration,setuserLogin,handleGuestLogin}} >
            {children}
        </AuthContext.Provider>
    )
 }

 export const useAuth= () => useContext(AuthContext)