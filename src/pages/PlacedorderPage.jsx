import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'

const PlacedorderPage = () => {
  const {cartList,discountedAmount} =useCart()
  const {userRegistration} = useAuth()
  const selectCartItem = cartList.cart
  return (
  <>
  
    <div style={{display:'flex',flexDirection:"column",alignContent:"center",textAlign:"center"}}>
    <div> <h1>Congratulation... !! {userRegistration.Firstname}{" "}{userRegistration.Lastname} </h1>
    <p>(Your order is placed)</p>
      </div>
      <div style={{ display:"flex",flexDirection:"column",alignContent:"center"}} >
        <h2>Order Summary</h2>
        <h4>Total Amount: ₹{discountedAmount} </h4>
        <h4>Total Items: {cartList.cart?.length} items </h4>
        <div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",padding:"1rem"}} >
    <div>
    <div className='cartPageLayoutCardLayout'>
    <ol className='cartBillitemDisplay'>{selectCartItem?.map((product)=>{
      const {title,_id,image,price,discount,actualPrice,rating} = product;
      return (
    <li className='CartitemDisplayCard' key={_id}>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        
      <div className='imageCartDisplay'><img src={image} alt={title} width={150} height={200} /></div>
      <div>
      <div>
      <p className='displayCardTitle' style={{margin:"0",padding:"0.5rem",fontSize:"18px",fontWeight:"bold",color:"gold"}} >{title}</p>
      <p> {rating}★</p>
      </div>
      
      <div className='accountDetails' >      
      <p className='displayCardPrice'> ₹{price} </p>
      
      <p className='displayCardActualPrice'style= {{color:'grey'}}> ₹{actualPrice} </p>
      <p className='displayCardCrossPrice'> | </p>
      <p className='displayCardDiscount' style= {{color:'lightblue'}} > ({discount} OFF) </p>
      </div>
      
      </div> 
      </div> 
      
      </li>)})}
      
    </ol>
    </div>
    </div>
    </div>
        </div>
      </div>       
    </div>
    </>
    )
}

export default PlacedorderPage
