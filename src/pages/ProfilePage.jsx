import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useSearchParams } from 'react-router-dom'
import AddAddressForm from '../component/AddAddressForm'
import { useData } from '../contexts/DataContext'

const ProfilePage = () => {
const {AddAdressDiv,setAddAdressDiv,setaddressRecord,addressRecord} = useData();
const [ProfileDiv,setProfileDiv]=useState(true)
const [AddressDiv,setAddressDiv] = useState(false)
const {userRegistration}=useAuth()

const handleToEditAddress = (id)=>{

}


const handleToDeletAddress=(id)=>{
  setaddressRecord(addressRecord.filter((lst)=> lst.id !== id))

}
return (
  <>
  {AddAdressDiv && <div className='AddAddressDiv' >
    <h2>Add Address</h2>
    <div> <AddAddressForm /></div>
 </div>}
  <div style={{display:'flex',flexDirection:"column",alignContent:"center",textAlign:"center"}} >
      
    <div>
    <div style={{display:'flex',flexDirection:"column",alignContent:"center",textAlign:"center"}}>
    <div> <h1>Welcome... !! {userRegistration.Firstname}{" "}{userRegistration.Lastname} </h1>
    <p>(You have been Sign In....)</p>
      </div>
      </div>
    </div>
    <div  >
    
    </div>
    </div>
   <div style={{display:"flex",justifyContent:"center"}} >
   <div style={{border:"1px solid",width:"18rem"}} >
   <div style={{display:"flex",justifyContent:"center"}} >
    {ProfileDiv?<button> Profile </button>: <button  onClick={()=>{ setProfileDiv(!ProfileDiv);setAddressDiv(!AddressDiv)}} >Profile</button>}
   {AddressDiv? <button>Address</button>: <button  onClick={()=>{ setAddressDiv(!AddressDiv);setProfileDiv(!ProfileDiv)}} >Address</button>}
   </div>
   <div>
{ ProfileDiv && <div >
  <div>
  <p><strong>Firstname:</strong>{userRegistration.Firstname} </p>
  <p><strong>lastname:</strong>{userRegistration.Lastname}</p>
  <p><strong>Email:</strong>{userRegistration.Email}</p>
</div>
<div>
<Link to="/signIn" >
    <button style={{alignContent:"center",padding:" 0rem 0.5rem 0rem 0.5rem",margin:"1rem",fontSize:"20px"}} onClick={()=>localStorage.removeItem("token")} >   Logout </button></Link>
  </div>
</div>}
{ AddressDiv && <div>
  <h2>Address</h2>
  <div>
  <ul style={{listStyle:"none"}} >{addressRecord.map(({HouseNo,Locality,City,District,Pincode,State,id})=><li style={{padding:"0.5rem",margin:"0.5rem",background:"lightblue"}} key={id}>
    <p>{HouseNo} {Locality} {City}, {Pincode},{District},{State}</p> 
    <button onClick={()=>handleToEditAddress(id)} >Edit</button>
    <button onClick={()=>handleToDeletAddress(id)}>Delete</button>

  </li>)}</ul>
  
  </div>
  <div>
   
  
  </div>
  <div>
    <button onClick={()=>setAddAdressDiv(true)}  >Add address</button>
    
  </div>

</div>  }
   </div>
    


   </div>
   </div>
   

    </>
)
}

export default ProfilePage
