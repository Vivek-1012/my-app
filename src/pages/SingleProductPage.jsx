import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useData } from '../contexts/DataContext';

const SingleProductPage = () => {
 
 const {ProductID} = useParams();
 const {productList}= useData()

  const ProductDetails = productList.products?.find((lst)=> lst._id === ProductID)



  return (
    <>

       <div style={{display:"flex",justifyContent:"center"}} >
        <div className='singlePageLayout' >
          <div className='singlePageLayoutCard'>
         
          <div className='singlePageLayoutImage' >
          <img src={ProductDetails.image} alt={ProductDetails.title}  height={300} width={200} /> </div>
          <div>
        <div className='singlePageLayoutText'>    
        <p style={{margin:"0",padding:"0.5rem",fontSize:"25px",fontWeight:"bold",color:"gold"}}>{ProductDetails.title}</p>
        <p style={{margin:'0',padding:"5px",fontSize:"23px"}}> {ProductDetails.rating}★</p>
        <div className='accountDetails' >      
          <p className='displayCardPrice'> ₹{ProductDetails.price} </p>
          <p className='displayCardActualPrice'style= {{color:'grey'}}> ₹{ProductDetails.actualPrice} </p>
          <p className='displayCardCrossPrice'> | </p>
          <p className='displayCardDiscount' style= {{color:'lightblue'}} > ({ProductDetails.discount} OFF) </p>
          </div>
          <p style={{borderBottom:"1px solid grey",paddingBottom:"1rem",margin:"0"}}> ⚡Hurry, Only Few Left!! </p>
          <div>
            <p>🏷️ Fastest Delivery</p>
            <p>🏷️ Inclusive of All Taxes</p>
            <p>🏷️ Cash On Delivery Available</p>
          </div>
          <div>    
        <p><strong>Author</strong>  :  {ProductDetails.author} </p>
        <p><strong> category</strong>  : {ProductDetails.categoryName} </p>  
        <p><strong> Binding</strong> :  Hardcover </p>  
        <p><strong>  Language</strong> : English </p>  
        </div>
        {/* {
          cartList.cart?.find(({_id})=> _id === product._id )? <Link to="/cart" ><button className='cartButton'style={{background:"black"}} > Go to Cart</button></Link>:<button onClick={()=>handleAddToCart(product)} className='cartButton'>Add to cart</button> 
          
        }
        { wishlistItem.wishlist?.find(({_id})=> _id === ProductDetails._id )
          ?<Link to="/wishlist" ><button className='cartButton' style={{backgroundColor:"blue"}} >Go to wishlist</button></Link>:<button className='cartButton' onClick={()=>handleAddToWishlist(product)} >Add to wishlist</button>
          } */}
        </div>
        <Link to="/product" style={{textDecoration:"none",fontWeight:"bold"}} > Back to Shop </Link>

        </div>
        </div>
        </div>
        </div>
        </>
  )
}

export default SingleProductPage