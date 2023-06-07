import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


const SignInPage = () => {
 const location = useLocation();
 const {setuserLogin,handleToLogin,handleGuestLogin} = useAuth();
 const Navigate = useNavigate();
 
  
  
  return (
    <>
    <body className='AuthBody' >     
      <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",top: "1rem",
    position: "relative"}}>
      <div className='AuthWallpaper' > </div>
    <div className='AuthFormLayout' >
    
    <div  className='AuthForm' >
      
      <h3>Sign In</h3>
        <label htmlFor="email">Email</label>
        <input  className='AuthForminput' type="text" name="email" id="email"  onChange={(e)=> setuserLogin((prv)=>({...prv,Email:e.target.value}))} autoComplete='off' />
      
        <label htmlFor="password">Password</label>
        <input className='AuthForminput' type="password" name="password" id="password"  onChange={(e)=> setuserLogin((prv)=>({...prv,Password:e.target.value}))} autoComplete='off' />
       <div >
      <button className='AuthFormButton1' type="submit" onClick={()=>{handleToLogin();
      return location.state ? Navigate(location?.state?.from?.pathname): Navigate("/product")
      }}>Sign In</button>
     
      <button  className='AuthFormButton2' onClick={()=>handleGuestLogin()} > Guest Login (Double click) </button>  
      </div>
      <div style={{textAlign:"center",borderRadius:"1rem",backgroundColor:"white",width: "45%", alignSelf: "center",padding: "0.5rem"}} >
        <Link style={{textDecoration:"none",color:"black"}} to="/signUp" >  New User...?  </Link>
      </div>      
    </div>
    
    </div>
    </div>
</body>


    </>
  )
}

export default SignInPage
