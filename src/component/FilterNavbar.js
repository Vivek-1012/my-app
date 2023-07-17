import React from 'react'
import { useData } from '../contexts/DataContext'

const FilterNavbar = () => {

const {selectRating,handlerToCLear,handlerRateByChange,handlerSortByChange,handlerPriceRangeChange,handlerCategoriesChange,selectCategories,selectSortBy,selectPriceRange} = useData()




    return (
   <>
  <div className='sideLayoutSideFilter'>  
   <div className='sidefilterDisplay'>
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
      </div> 
   
   </>
  )
}

export default FilterNavbar