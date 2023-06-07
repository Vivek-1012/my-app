import React from 'react'
import { useWishlist } from '../contexts/WishlistContext'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

const WishlistPage = () => {
 const {wishlistItem,handleRemoveFromWishlist} = useWishlist()
 const{handleAddToCart,cartList} = useCart()   
 const listWishlistItem = wishlistItem.wishlist

 return (<>
    <div>WishlistPage</div>
    <div>
    <div style={{textAlign:"center"}} >
      <h2>WishList</h2> ({listWishlistItem?.length} items)     
    </div>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",padding:"1rem"}} >
    <div>
    <div className='cartPageLayoutCardLayout'>
    <ol className='cartBillitemDisplay'>{listWishlistItem?.map((product)=>{
      const {title,_id,image,price,discount,actualPrice,rating} = product;
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
      
      </div> 
      </div> 
      <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}} >
      <div>
       <button className='CartBillButton' onClick={()=>handleRemoveFromWishlist(product)} > Remove from wishlist</button>
       </div>
     <div> {cartList.cart?.find(({_id})=> _id === product._id ) ? <Link to="/cart" ><button className='CartBillButton'>Go to Cart</button></Link>:<button className='CartBillButton' onClick={()=>handleAddToCart(product)}>Add to Cart</button> } </div>
       </div>
      </li>)})}
      
    </ol>
    </div>
    </div>
    </div>
    </div>
  </>)
}

export default WishlistPage