import React from 'react'
import { useData } from '../contexts/DataContext'
import { Link} from 'react-router-dom'

const HomePage = () => {
   const{categoriesList,setSelectCategories} = useData()
console.log(categoriesList);   
   return (
      <>
      <body className='homeBackground'>
        
      
      <div className='Homelayout' >
    <div style={{display:"flex",justifyContent:"center"}} >
    <div className='homeWallpaper'>
    <p className='Hometitle' >Pustak<span  >भंडार</span></p>

    <Link to='/product'  ><button className='ExploreButton'> Explore </button></Link>
    </div>
    </div>
    <div style={{margin:"1rem",padding:"2rem" }} >
      <div style={{display:"flex",listStyle:"none",justifyContent:"space-around",flexWrap:"wrap"}}>      {categoriesList.categories?.map((item)=>{
      const {id,categoryName,description
      } = item
      return(
        
      <Link to="/product" > <button className='categoriesItem' onClick={()=>console.log(setSelectCategories(`${categoryName}`))}  key={id}>
  <h4 style={{color:"black",fontSize:"25px"}} >{categoryName}</h4>
  <p>{description}</p>
</button> </Link>  )})}</div>

    </div>
    </div>
    </body>  
  </>
  )
}

export default HomePage