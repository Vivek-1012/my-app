import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
  const {userRegistration}=useAuth()
  return (
  <>
  <div style={{display:'flex',flexDirection:"column",alignContent:"center",textAlign:"center"}} >
      
    <div>
    <div style={{display:'flex',flexDirection:"column",alignContent:"center",textAlign:"center"}}>
    <div> <h1>Welcome... !! {userRegistration.Firstname}{" "}{userRegistration.Lastname} </h1>
    <p>(You have been Sign In....)</p>
      </div>
      </div>
    </div>
    <div  >
      <Link to="/signIn" >
    <button style={{alignContent:"center",padding:"1rem",margin:"1rem",fontSize:"20px"}} onClick={()=>localStorage.removeItem("token")} >   Logout </button></Link>
    </div>
    </div>
    </>
)
}

export default ProfilePage
