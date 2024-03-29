

import React from 'react'
import { useData } from '../contexts/DataContext'

const AddAddressForm = () => {
  const{handleAddressInput,AddAddressForm,setAddAdressDiv,setAddAddressForm,handleAddressSubmit} = useData();
  
 
  
    return (
    <>
    <form action='' onSubmit={handleAddressSubmit} >
<div>
     <label htmlFor='HouseNo'>House No.</label>
    <input value={AddAddressForm.HouseNo} placeholder='House No.' type='text' onChange={handleAddressInput} autoComplete='off' name='HouseNo' id='HouseNo' />
</div>
<div>
    <label htmlFor='Locality'>Locality</label>
    <input value={AddAddressForm.Locality} placeholder='Locality' type='text' onChange={handleAddressInput} autoComplete='off' name='Locality' id='Locality' />
</div>
<div>
    <label htmlFor='City'>City</label>
    <input value={AddAddressForm.City} placeholder='City' type='text' onChange={handleAddressInput} autoComplete='off' name='City' id='City' />
</div>
<div>
    <label htmlFor='Pincode'>Pincode</label>
    <input value={AddAddressForm.Pincode} placeholder='Pincode' type="number" onChange={handleAddressInput} autoComplete='off' name='Pincode' id='Pincode' />
</div>
<div>
    <label htmlFor='District'>District</label>
    <input value={AddAddressForm.District} placeholder='District' type='text' onChange={handleAddressInput} autoComplete='off' name='District' id='District' />
</div>
<div>
    <label htmlFor='State'>State</label>
    <input value={AddAddressForm.State} placeholder='State' type='text' onChange={handleAddressInput} autoComplete='off' name='State' id='State' />
</div>
<button style={{padding:"0.5rem",cursor:"pointer",backgroundColor:"#900C3F",color:"white",borderRadius:"1rem",margin:"0.5rem"}} type='submit'>Registration</button>
<button style={{padding:"0.5rem",cursor:"pointer",backgroundColor:"#FF5733",borderRadius:"1rem",margin:"0.5rem"}} onClick={()=>setAddAdressDiv(false)} >Cancel</button>
    </form>
      
    </>
  )
}

export default AddAddressForm
