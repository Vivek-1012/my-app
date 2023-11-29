import React, {  useState } from 'react'
import { useData } from '../contexts/DataContext'
import { useCart } from '../contexts/CartContext'
import { useWishlist } from '../contexts/WishlistContext'
import { Link } from 'react-router-dom'
import Navbutton from '../component/Navbutton'
import FilterNavbar from '../component/FilterNavbar'
// import ExploreCard from '../component/ExploreCard'
 

const ExploreCard = ({product}) => {

    const{handleSinglePage,productList,input, setInput, setStore,selectCategories,setSelectCategories} = useData();
    const{handleAddToCart}= useCart();
    const {wishlistItem,handleAddToWishlist}= useWishlist(); 
    const {cartList}=useCart()
    const [sideFilterNavbar,setsideFilterNavbar] = useState(false)
    
  const {selectRating,handlerToCLear,handlerRateByChange,handlerSortByChange,handlerPriceRangeChange,handlerCategoriesChange,selectSortBy,selectPriceRange} = useData()
    
  


    const {title,_id,actualPrice,author,image,price,discount,rating} = product;
    return (
  <li className='itemDisplayCard' key={_id}>
    
    <div><img src={image} className='productImage' alt={title} width={150} height={200} style={{position:"relative"}} />
    <div className='wishlistIcon' >{ wishlistItem.wishlist?.find(({_id})=> _id === product._id )
        ?<Link to="/wishlist" ><p ><img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/2224px-A_perfect_SVG_heart.svg.png`} height={35} alt="" /></p></Link>:<p onClick={()=>handleAddToWishlist(product)} ><img src={`https://www.svgrepo.com/show/152156/heart-shape.svg` }  height={35} alt="" /></p>
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
             
  </li>)}
export default ExploreCard
