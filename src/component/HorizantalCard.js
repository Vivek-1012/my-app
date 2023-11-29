 import React from 'react'
 
 const HorizantalCard = ({product}) => {
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
    
    </li>)}
 
 export default HorizantalCard
 