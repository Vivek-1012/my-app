import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'
import { useData } from '../contexts/DataContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CheckoutPage = () => {
  const {userRegistration} = useAuth()
  const {addressRecord}=useData()
  const {cartList,finalAmount,discountedAmount,setDiscountedAmount}=useCart();
  const selectCartItem = cartList.cart
  const [chooseAddress,setChooseAddress] = useState()
  const amountDiscounted = finalAmount - finalAmount/10
  setDiscountedAmount(amountDiscounted )
  console.log(chooseAddress)
  const Navigate = useNavigate();
//   const {HouseNo,Locality,City,District,Pincode,State} = item;
const OrderPlacehandler = (chooseAddress) =>{
    if( chooseAddress === undefined ){
       toast.error("Address not selected..!")
      
    }else{
      toast.success("Address selected")
        
    }
}

console.log(finalAmount)

return (
  <>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}} >
        
        <div style={{margin:"1rem"}} >
            <h2 style={{margin:"0.5rem"}} >Choose Address</h2>
            <div  >
                <ol style={{listStyle:"none",display:"flex",flexDirection:"column"}}>{addressRecord.map((item)=>{
                    const {HouseNo,Locality,City,District,Pincode,State,id} = item;
                    return(
                <li key={id} style={{width:"22rem"}} >
                     <label>
                    <div style={{marginBottom:"1rem"}} key={id}>
                       
                    <input type="radio" onChange={(e)=>setChooseAddress(e.target.value)} value={`${HouseNo},${Locality},${City},${District},${Pincode},${State}`} name="" id="" /> 
                    {HouseNo},{Locality},{City},{District},{Pincode},{State}</div></label>
                    
                </li>)}
                )}

                </ol>
                <Link style={{textDecoration:"none",fontSize:"large",color:"black",border:"1px solid black",padding:"0.5rem 1rem",background:"lightblue",borderRadius:"0.5rem",margin:"0.5rem"}}  to="/profile" >Add adress</Link>
            </div>
        </div>
       
        <div style={{border:"6px solid #472e6dff",display:"flex",flexDirection:"column",borderRadius:"1rem",padding:"2rem",width:"20rem",flexWrap:"wrap"}} >
            <div style={{borderBottom:"2px solid black",paddingBottom:"0.5rem"}} ><p style={{fontWeight:"bold",textAlign:"center",fontSize:"20px"}} >ORDER DETAILS</p></div>
            <div style={{borderBottom:"2px solid black",paddingBottom:"0.5rem"}} >
                <div style={{display:"flex",justifyContent:"space-between"}} >
                <div>Item</div>
                <div>Qty</div>
                </div >
                <div style={{display:"flex",justifyContent:"space-between"}} >
                <div><ol style={{listStyle:"none"}} >{selectCartItem?.map(({title})=><li>{title}</li>)}</ol></div>
                <div><ol style={{listStyle:"none"}} >{selectCartItem?.map(({qty})=><li>{qty}</li>)}</ol></div>
                </div>
            </div>
            <div><strong>PRICE DETAILS</strong></div>
            <div style={{display:"flex",justifyContent:"space-between",borderBottom:"2px solid black",paddingBottom:"0.5rem"}} >
                <div>
                    <p>Total Items({selectCartItem?.length})</p>
                    <p>Discount</p>
                    <p>Delivery Charges</p>
                    <p>Coupon Discount</p>
                    <p style={{paddingTop:"0.5rem"}} ><strong>Total Amount :</strong></p>
                </div>
                <div>
                    <p>{finalAmount}</p>
                    <p>10%</p>
                    <p>Free</p>
                    <p>None</p>
                    <p style={{paddingTop:"0.5rem"}}>{discountedAmount}</p>
                </div>
            </div>
            <div style={{borderBottom:"2px solid black",paddingBottom:"0.5rem",wordWrap:"break-word",width:"15rem"}}>
                <p> <strong>Deliver to:</strong> </p>
                <p>{chooseAddress}</p>
                            </div>
                            <p><strong>Mode of payment : </strong>
                                 <select>
                                    <option>select</option>
                                    <option>Cash on Delivery</option>
                                    <option>UPI</option>
                                    <option>Net Banking</option>
                                    <option>Card</option>
                               
                                </select> </p>
                            
            <div style={{alignSelf:"center"}} >
                { chooseAddress !== undefined && finalAmount !== 0 ?  <button onClick={()=>Navigate("/order_summary")} className='billButton' >Place Order </button>     : <button onClick={OrderPlacehandler(chooseAddress)} style={{backgroundColor:"#d85a5a"}} className='billButton' >Place Order</button>}
                </div>
             </div>
    
    </div>
    <ToastContainer />
</>
  )
  
}

export default CheckoutPage