import React, {  useState } from 'react'
import { useData } from '../contexts/DataContext'
import { useCart } from '../contexts/CartContext'
import { useWishlist } from '../contexts/WishlistContext'
import { Link } from 'react-router-dom'
import Navbutton from '../component/Navbutton'
import FilterNavbar from '../component/FilterNavbar'
 

const ProductPage = () => {
  
  const{handleSinglePage,productList,input, setInput, setStore,selectCategories,setSelectCategories} = useData();
  const{handleAddToCart}= useCart();
  const {wishlistItem,handleAddToWishlist}= useWishlist(); 
  const {cartList}=useCart()
  const [sideFilterNavbar,setsideFilterNavbar] = useState(false)
  
const {selectRating,handlerToCLear,handlerRateByChange,handlerSortByChange,handlerPriceRangeChange,handlerCategoriesChange,selectSortBy,selectPriceRange} = useData()
  
 console.log(sideFilterNavbar)
  
  


 
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
      <li><input type="checkbox" value={"non-fiction"} checked={selectCategories.includes("non-fiction")} onChange={handlerCategoriesChange} />Non-Fiction</li></label><label>
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
        <button onClick={()=>setsideFilterNavbar(!sideFilterNavbar)} className='BtnMobileNavICon'> <Navbutton /> </button>
{ sideFilterNavbar && <div><FilterNavbar /></div>}
  
    <h2>Showing All Products</h2>
    {setStore?.length} items
    {setStore?.length === 0 ?<p style={{fontSize:"40px",padding:"1rem",margin:"1rem"}} > "No Item to show... 🤐"</p>:
      <div >
    <ol className='itemDisplay'>{setStore?.map((product)=>{
      
      const {title,_id,actualPrice,author,image,price,discount,rating} = product;
      return (
    <li className='itemDisplayCard' key={_id}>
      
      <div><img src={image} className='productImage' alt={title} width={150} height={200} style={{position:"relative"}} />
      <div className='wishlistIcon' >{ wishlistItem.wishlist?.find(({_id})=> _id === product._id )
          ?<Link to="/wishlist" ><p ><img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/2224px-A_perfect_SVG_heart.svg.png`} height={40} alt="" /></p></Link>:<p onClick={()=>handleAddToWishlist(product)} ><img src={`https://www.svgrepo.com/show/152156/heart-shape.svg` }  height={40} alt="" /></p>
          }</div>
      </div>     <div className='titleAndRating'>
      <p className='displayCardTitle' style={{textDecoration:"none",color:"Purple",fontSize:"18px",fontWeight:"bold"}}><Link to={`/productDetails/${_id}`}>{title}</Link></p>
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
        
        {
          cartList.cart?.find(({_id})=> _id === product._id )? <Link to="/cart" ><button className='cartButton'style={{background:"#93BFCF"}} > Go to Cart</button></Link>:<button onClick={()=>handleAddToCart(product)} className='cartButton'>Add to cart</button> 
          
        }
        
      
        </div>
               
    </li>)})}</ol></div>}
    </div>
    </div>
    </>
  )
}

export default ProductPage
