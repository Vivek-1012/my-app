 
import { useAuth } from '../contexts/AuthContext';
import { Link } from "react-router-dom";

const SignUpPage = () => {
  
  const {handleToSignUp,setuserRegistration} =useAuth();
  

  return (
    <>
    
    <body className='AuthBody'>
      <div  style={{display:"flex",justifyContent:"center",flexWrap:"wrap",top: "1rem",
    position: "relative"}}>
      <div className='AuthFormLayout'> 
    
        <div className='AuthForm'> 

        <h2>Sign Up</h2>

        <label htmlFor='Firstname'>Firstname</label>
        <input className='AuthForminput' type="text"  onChange={(e)=>setuserRegistration((prv)=>({...prv,Firstname:e.target.value}))} name="Firstname" id="Firstname" autoComplete="off" />
      
      
        <label htmlFor='Lastname'>Lastname</label>
        <input className='AuthForminput' type="text"  onChange={(e)=>setuserRegistration((prv)=>({...prv,Lastname:e.target.value}))} name="Lastname" id="Lastname" autoComplete="off" />
      
        <label htmlFor='Email'>Email</label>
        <input className='AuthForminput' type="email" onChange={(e)=>setuserRegistration((prv)=>({...prv,Email:e.target.value}))} name="Email" id="Email" autoComplete="off" />
      
      
        <label htmlFor='Password'>Password</label>
        <input className='AuthForminput' type="password"  onChange={(e)=>setuserRegistration((prv)=>({...prv,Password:e.target.value}))} name="Password" id="Password" />
      
      
        <label htmlFor='Password'>Confirm Password</label>
        <input className='AuthForminput' type="password"  name="Password" id="Password" />
      
    {/* <h3>Add Address</h3> */}
        {/* <label htmlFor='HouseNo'>HouseNo</label>
        <input className='AuthForminput' type="text"  onChange={(e)=>setuserRegistration((prv)=>({...prv,HouseNo:e.target.value}))} name="Firstname" id="Firstname" autoComplete="off" />
      
      
        <label htmlFor='City'>City</label>
        <input className='AuthForminput' type="text"  onChange={(e)=>setuserRegistration((prv)=>({...prv,City:e.target.value}))} name="Lastname" id="Lastname" autoComplete="off" />
      
        <label htmlFor='State'>State</label>
        <input className='AuthForminput' type="email" onChange={(e)=>setuserRegistration((prv)=>({...prv,State:e.target.value}))} name="Email" id="Email" autoComplete="off" />
      
      
        <label htmlFor='Country'>Country</label>
        <input className='AuthForminput' type="text"  onChange={(e)=>setuserRegistration((prv)=>({...prv,Country:e.target.value}))} name="Password" id="Password" /> */}
       </div>
        <button className='AuthFormButton3' type="submit" onClick={()=>handleToSignUp()}>Registration</button>
      <div style={{textAlign:"center",borderRadius:"1rem",backgroundColor:"white",width: "45%", alignSelf: "center",padding: "0.5rem"}} >
        <Link style={{textDecoration:"none",color:"black"}} to="/signIn" > Return to SignIn </Link>
      </div>

       </div> 
</div>
<div></div>
    </body>

    
    
    </>
  )
}

export default SignUpPage;