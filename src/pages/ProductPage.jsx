import React, {  useState } from 'react'
import { useData } from '../contexts/DataContext'
import { useCart } from '../contexts/CartContext'
import { useWishlist } from '../contexts/WishlistContext'
import { Link } from 'react-router-dom'
 

const ProductPage = () => {
  
  const{productList,input, setInput,selectCategories,setSelectCategories} = useData();
  const{handleAddToCart}= useCart();
  const {wishlistItem,handleAddToWishlist}= useWishlist(); 
  const {cartList}=useCart()
  
  const [selectPriceRange,setSelectPriceRange] = useState(0);
  
  const [selectRating, setSelectRating] = useState("");
  const [selectSortBy,setSelectSortBy]= useState("")
  
 
  
  let setStore = productList.products; 


  
  
//event handlers
 const handlerToCLear = () =>{
  setSelectPriceRange(0);
  setSelectSortBy("")
  setSelectRating("")
  setInput("")
  setSelectCategories("")
}


const handlerPriceRangeChange = (event)=> setSelectPriceRange(event.target.value)
 
const handlerSortByChange = (event) => setSelectSortBy(event.target.value);
   
const handlerRateByChange = (event) =>setSelectRating(event.target.value)

const handlerCategoriesChange = (event)=>{ 
  
  if(selectCategories.includes(event.target.value )){
    setSelectCategories(prev => prev.filter(item => item !== event.target.value))
  }else{
    setSelectCategories((prev) => [...prev , event.target.value])
  }
}




if(selectCategories){
  setStore = setStore.filter(lst=> selectCategories.includes(lst.categoryName))
}




if(selectPriceRange){
  setStore = setStore?.filter(lst=> lst.price >= selectPriceRange)
}

 
if(input){
  setStore = input === "" ? setStore : setStore.filter((lst) => lst.title.toLowerCase().includes(input.toLowerCase()));
  }



 if(selectRating){
  setStore = setStore.filter(lst=> lst.rating >= JSON.parse(selectRating) )
 }


if(selectSortBy){
  if(selectSortBy==="All"){
    setStore = selectSortBy === "All"? setStore : "";
  }if(selectSortBy === "Low"){
    setStore.sort((a,b)=> b.price - a.price)
  }if(selectSortBy === "High"){
    setStore.sort((a,b)=> a.price - b.price)
  }
}





return (
<>
    <div className='storeDisplay'>

      <div className='filterDisplay'>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
        <h2>Filter</h2>
        <h4 onClick={()=>handlerToCLear()} style={{cursor:"pointer"}} > Clear </h4></div>
    <div className='filterHeading' ><strong> Price</strong></div>
    <div>
      <input className='PriceRange' type="range" min="100" max
      ="1000" value={selectPriceRange} onChange={handlerPriceRangeChange} />
    </div>
    <div className='filterHeading'> Category</div><div>
      <ol style={{listStyle:"none"}}>
      <label>
      <li><input type="checkbox" value={"fiction"} checked={selectCategories.includes("fiction")} onChange={handlerCategoriesChange} />Fiction</li></label><label>
      <li><input type="checkbox" value={"non-fiction"} checked={selectCategories.includes("non-fiction")} onChange={handlerCategoriesChange} />Non Fiction</li></label><label>
      <li><input type="checkbox" value={"self-help"} checked={selectCategories.includes("self-help")} onChange={handlerCategoriesChange}/>Self Help</li></label>
       
      </ol>
    </div>
    <div className='filterHeading'>Rating</div>
    <div>
      <ol style={{listStyle:"none"}}>
      <lable><li><input type="radio" value="1" checked={selectRating==="1"} onChange={handlerRateByChange} /> 1 Stars & above</li></lable>
      <lable><li><input type="radio" value="2" checked={selectRating==="2"} onChange={handlerRateByChange} /> 2 Stars & above</li></lable>
      <lable><li><input type="radio" value="3" checked={selectRating==="3"} onChange={handlerRateByChange} /> 3 Stars & above</li></lable>
      <lable><li><input type="radio" value="4" checked={selectRating==="4"} onChange={handlerRateByChange} /> 4 Stars & above</li></lable>
      </ol>
    </div>
    <div className='filterHeading'>Sort by</div>
    <div>
      <ol style={{listStyle:"none"}}>
      <lable>
    <li><input type="radio" value="Low" checked={selectSortBy==="Low"} onChange={handlerSortByChange} />Price- High to Low</li>
    </lable>
    
    <lable>   
    <li>
      <input type="radio" value="High" checked={selectSortBy==="High"} onChange={handlerSortByChange} />Price- Low to High</li></lable>
      
    </ol> 
    </div>
      </div>
      <div className='booksDisplay'>
    <h2>Showing All Products</h2>
    {setStore?.length} items
    {setStore?.length === 0 ?<p style={{fontSize:"40px",padding:"1rem",margin:"1rem"}} > "No Item to show... 🤐"</p>:
      <div >
    <ol className='itemDisplay'>{setStore?.map((product)=>{
      
      const {title,_id,actualPrice,author,image,price,discount,rating} = product;
      return (
    <li className='itemDisplayCard' key={_id}>
      
      <div><img src={image} alt={title} width={150} height={200} /></div>     <div className='titleAndRating'>
      <p className='displayCardTitle' style={{textDecoration:"none",color:"Purple",fontSize:"18px",fontWeight:"bold"}}  to={`/ProductDetails/${_id}`}>{title}</p>
      <p className='displayCardRating'> {rating}★</p>
      </div>
      <p className='displayCardAuthor' >{author}</p>
      <div className='accountDetails' >      
      <p className='displayCardPrice'> ₹{price}  </p>
      <p className='displayCardActualPrice'style= {{color:'grey'}}> ₹{actualPrice} </p>
      <p className='displayCardCrossPrice'> | </p>
      <p className='displayCardDiscount' style= {{color:'blue'}} > ({discount} OFF) </p>
      </div>    
      

      <div className='cartButtonDiv'>
        { wishlistItem.wishlist?.find(({_id})=> _id === product._id )
          ?<Link to="/wishlist" ><button className='cartButton' style={{backgroundColor:"blue"}} >Go to wishlist</button></Link>:<button className='cartButton' onClick={()=>handleAddToWishlist(product)} >Add to wishlist</button>
          }
        {
          cartList.cart?.find(({_id})=> _id === product._id )? <Link to="/cart" ><button className='cartButton'style={{background:"black"}} > Go to Cart</button></Link>:<button onClick={()=>handleAddToCart(product)} className='cartButton'>Add to cart</button> 
          
        }
        
      
        </div>
               
    </li>)})}</ol></div>}
    </div>
    </div>
    </>
  )
}

export default ProductPage
