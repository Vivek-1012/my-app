import { NavLink } from "react-router-dom";
import "./App.css";
import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import Mockman from "mockman-js"
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { useData } from "./contexts/DataContext";
import { RequireAuth } from "./component/RequireAuth";
import CheckoutPage from "./pages/CheckoutPage";
import PlacedorderPage from "./pages/PlacedorderPage";
import { useCart } from "./contexts/CartContext";
import { useWishlist } from "./contexts/WishlistContext";
import SingleProductPage from "./pages/SingleProductPage";
import Footer from "./component/icons/Footer";
 



function App() {
const{input,inputHandler} = useData()
const {wishlistItem} = useWishlist()
const {cartList} = useCart()

return (
    <div className="App">
      <nav className="navbar " style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        <div>
        <NavLink className="navItem" to="/" > Pustakभंडार </NavLink>
        </div>
        <div  >
    <NavLink to="/product" ><input to="/product" className="NavSearch" type="text" value={input} onChange={inputHandler} placeholder="Search..." /></NavLink>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}} >
        <NavLink className="navItem" to="/product" > Shop </NavLink> 
        <NavLink className="navItem" to="/wishlist" > <img className="navIcon" src={`https://cdn-icons-png.flaticon.com/512/8830/8830807.png`} />
        <span className="nodiv" >{wishlistItem.wishlist?.length}</span> </NavLink>  
        <NavLink className="navItem" to="/cart" ><img className="navIcon" src={`https://e7.pngegg.com/pngimages/861/787/png-clipart-emoji-shopping-cart-shopping-bags-trolleys-emoji-angle-vehicle.png`} /> <span className="nodiv" >{cartList.cart?.length}</span> </NavLink> 
        <NavLink className="navItem" to="/profile" > <img className="navIcon" src={`https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users.png`} /> </NavLink>        
        </div>
      </nav>
     <Routes>
      <Route path="/" element={<HomePage  />} />
      <Route path="/product" element={< ProductPage />} />
      <Route path="/wishlist" element={<RequireAuth> < WishlistPage /></RequireAuth> } />
      <Route path="/cart" element={<RequireAuth>< CartPage /></RequireAuth> } />
      <Route path="/profile" element={ <RequireAuth>  < ProfilePage /> </RequireAuth>  } />
      <Route path='/mockman' element={<Mockman />} />
      <Route path='/signIn' element={<SignInPage />} />
      <Route path='/signUp' element={<SignUpPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order_summary" element={<PlacedorderPage />} />
      <Route path="/productDetails/:ProductID" element={<SingleProductPage />} />
     </Routes>
     <footer> <Footer/> </footer>


    </div>
  );
}

export default App;
