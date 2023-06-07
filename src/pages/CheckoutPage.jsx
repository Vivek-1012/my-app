import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'

const CheckoutPage = () => {
  const {userRegistration} = useAuth()
  const {cartList,finalAmount,discountedAmount,setDiscountedAmount}=useCart();
  const selectCartItem = cartList.cart
  
  const amountDiscounted = finalAmount - finalAmount/10
  setDiscountedAmount(amountDiscounted )
  
  return (
  <>
    <div>CheckoutPage</div>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}} >
        
        <div>
            <div>
                <h2>User Address</h2>
                <p>House No: {userRegistration.HouseNo} </p>
                <p>City: {userRegistration.City} </p>
                <p>State: {userRegistration.State} </p>
                <p>Country:  {userRegistration.Country}</p>
                <p>Phone no: </p>
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
            <div style={{borderBottom:"2px solid black",paddingBottom:"0.5rem"}}>
                <p> <strong>Deliver to:</strong> </p>
                <p>Phone Number: {userRegistration.Phoneno} </p>
                <p>{userRegistration.HouseNo}, {userRegistration.City}, {userRegistration.State}, </p>
                <p>{userRegistration.Country}</p>
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
                <Link to="/order_summary" ><button>Place Order</button></Link>
                </div>
             </div>
    
    </div>
</>
  )
  
}

export default CheckoutPage