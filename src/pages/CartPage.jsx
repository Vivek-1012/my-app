import React from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom';
import { useWishlist } from '../contexts/WishlistContext';

const CartPage = () => {
   
  const {cartList,handleRemoveFromCart,setfinalAmount,handleQuantityForCart} = useCart();
  const {wishlistItem,handleAddToWishlist} = useWishlist();  
  
  const selectCartItem = cartList.cart
  const totalAmount = cartList.cart?.reduce((acc,curr)=> acc + (curr.price*curr.qty), 0)
  setfinalAmount(totalAmount)
  return (
  <>
    <div style={{textAlign:"center"}} >
      <h2>Cart</h2> ({selectCartItem?.length} items)     
    </div>
   { selectCartItem?.length === 0 ? <div style={{textAlign:"center"}} > <p style={{fontSize:"30px"}} >Add Something to cart...!!</p> </div> :<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",padding:"1rem"}} >
    <div>
    <div className='cartPageLayoutCardLayout'>
    <ol className='cartBillitemDisplay'>{selectCartItem?.map((product)=>{
      const {title,_id,image,price,discount,actualPrice,rating,qty} = product;
      return (
    <li className='CartitemDisplayCard' key={_id}>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        
      <div className='imageCartDisplay'><img src={image} alt={title} width={150} height={200} /></div>
      <div>
      <div>
      <p className='displayCardTitle'><Link  to={`/ProductDetails/${_id}`} style={{margin:"0",padding:"0.5rem",fontSize:"18px",fontWeight:"bold",color:"gold"}} > {title}</Link></p>
      <p> {rating}★</p>
      </div>
      
      <div className='accountDetails' >      
      <p className='displayCardPrice'> ₹{price} </p>
      
      <p className='displayCardActualPrice'style= {{color:'grey'}}> ₹{actualPrice} </p>
      <p className='displayCardCrossPrice'> | </p>
      <p className='displayCardDiscount' style= {{color:'lightblue'}} > ({discount} OFF) </p>
      </div>
      <div style={{display:"flex"}}>
        <p> Quantity </p>
        <button className='btnCart' onClick={()=>{qty ===1? handleRemoveFromCart(product) :  handleQuantityForCart(product,"decrement")}} >-</button>
        <p>{qty}</p>
        <button className='btnCart' onClick={()=>{handleQuantityForCart(product,"increment")}} >+</button>
      </div>
      </div> 
      </div> 
      <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}} >
      <div>
       <button className='CartBillButton' onClick={()=>handleRemoveFromCart(product)} > Remove from cart</button>
       </div>
       <div>{wishlistItem.wishlist?.find(({_id})=> _id === product._id )?<Link to="/wishlist"><button className='CartBillButton' >Go to wishList</button></Link>
        :<button className='CartBillButton' onClick={()=>handleAddToWishlist(product)}>Add to wishList</button>}
        </div>
       </div>
      </li>)})}
      
    </ol>
    
    </div>
    </div>
    <div className='cartPageLayoutBillLayout'>
      <div className='billLayout' >
        <div className='billLayoutCoupon'>
      {/* <p>Have A Coupon ?</p> */}
         
         </div>         
      <p className='PriceDetails'>Price Details</p>
      <div >
      {/* <p>Price({selectCartItem.length}items)</p>   <p>₹{totalAmount}</p> */}
      <ol style={{listStyle:"none"}}>{selectCartItem?.map(({title,price,qty,_id})=><li key={_id}>
        <div className='billLayoutPrice'>
        <div>{title}</div>  <div>₹{price*qty}</div> 
        </div>
      </li>)}</ol>
      </div>
      <div className='billLayoutDelivery'>
      <p><strong> Delivery Charges</strong> </p><p> FREE</p>
      </div>
      <div className='billLayoutCoupon'>
      <p><strong>Coupon Discount</strong> </p><p><span style={{color:"red"}} >None</span> </p>
      </div>
      <div className='billLayouttotalBill'>
      <p><strong>total Bill</strong></p><p> <strong>₹{totalAmount}</strong></p>
    </div>
    <div style={{alignContent:"center"}} >
      <Link to="/checkout" ><button className='billButton' style={{backgroundColor:"#6a6db9",color:"white"}} >Checkout</button></Link>
    </div>
    </div>
    </div>
    </div>}
    </>
  )
}

export default CartPage
