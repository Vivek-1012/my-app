import React from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../contexts/DataContext';

const SingleProductPage = () => {
 
 const {ProductID} = useParams();
 const {productList}= useData()

  const ProductDetails = productList.products?.find((lst)=> lst._id === ProductID)
console.log("ProductDetails")


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
        <button>Add to Cart</button>
        <button>Add to WishList</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
  )
}

export default SingleProductPage