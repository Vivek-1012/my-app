import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image:`https://i.pinimg.com/originals/6b/9c/26/6b9c2669f522fef954c8bffbc3ce342b.jpg`,
    title: "Bhagavad Gita",
    author: "Shri Krishna",
    price: 1000,
    actualPrice: 2000,
    categoryName: "non-fiction",
    rating: 5,
    wishList: false,
    
    cart: false,
    discount: "50%"  
  },
  {
    _id: uuid(),
    image:`https://www.booksfree.org/wp-content/uploads/2021/09/24.jpg` ,
    title: "Atomic Habits",
    author: "James Clear",
    price: 480,
    actualPrice: 600,
    discount: "20%",
    categoryName: "self-help",
    rating: 5.0,
    wishList: false,
    
    cart:false 
  },
  {
    _id: uuid(),
    image:`https://wallpapercave.com/wp/wp5692227.jpg` ,
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 800,
    actualPrice: 1600, 
    discount: "50%",
    categoryName: "fiction",
    rating: 1.5,
    wishList: false,
    
    cart:false 
  },
  {
    _id: uuid(),
    image:`https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfUvVy-rYje8EzgQI2NZ6AvrNoOZfowk0OOtJvrF5ymepo3N18Bfp3woVbsIh0CaoT0QOkqoZ-OBLIb6Cw8BwVWPs1sK_O40YCaBdD-Wnhg_24bmR83IUBiEVPFbvefpOhUSQBnoojyxGmB8TXERGLbC1Kxb4vS4KNkk4CdKMI-RhttsVGYYmQnh_l1w/s692/main-qimg-b9efbe846224c8f0a18e0d8193023d5b-lq.jpg` ,
    title: "You Can WIN",
    author: "Shiv Khera",
    price: 450,
    actualPrice: 500 , 
    discount: "10%",
    categoryName: "non-fiction",
    rating: 3.5,
    wishList: false,
    
    cart: false  
  },
  {
    _id: uuid(),
    image:`https://kbimages1-a.akamaihd.net/f95bd34c-27b1-470c-b036-6f2c74250f78/1200/1200/False/the-power-of-habit-2.jpg` ,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    price: 800,
    actualPrice: 1000 ,
    discount: "20%",
    categoryName: "self-help",
    rating: 3.5,
    wishList: false,
    
    cart:false 
  },
  {
    _id: uuid(),
    image:`https://d1fa9n6k2ql7on.cloudfront.net/tgr-think-and-grow-rich-by-napoleon-hill-header.jpg` ,
    title: "Think & Grow Rich",
    author: "Napoleon Hill",
    price: 200,
    actualPrice: 1000,
    discount: "80%",
    categoryName: "fiction",
    rating: 4.5,
    wishList: false,
    
    cart:false 
  },
  {
    _id: uuid(),
    image:`https://n1.sdlcdn.com/imgs/k/h/e/Ignited-Minds-By-A-P-SDL821109616-2-a21f6.jpg` ,
    title: "Ignited Minds",
    author: "A.P.J. Abdul Kalam",
    price: 900,
    actualPrice:1000 ,
    discount: "10%",
    categoryName: "non-fiction",
    rating: 3.5,
    wishList: false,
    
    cart: false  
  },
  {
    _id: uuid(),
    image:`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1351539051i/15843166.jpg` ,
    title: "You are a Badass",
    author: "Jen Sincero",
    price: 600,
    actualPrice: 1000 ,
    discount: "40%",
    categoryName: "self-help",
    rating: 2.5,
    wishList: false,
    
    cart:false 
  },
  {
    _id: uuid(),
    image:`https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTMtIHKz6P5NlEdwV3Mt1lL_fkoqXTj57c8hf-xXO06O6fIE3Gr` ,
    title: "Happy Palce",
    author: "Emily Henry",
    price: 100,
    actualPrice: 500,
    discount: "80%",
    categoryName: "fiction",
    rating: 1.5,
    wishList: false,
    
    cart:false 
  },
  {
    _id: uuid(),
    image:`https://books.google.co.in/books/content?id=DXQ8KM-03HAC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1qALZ1aahrMR0cFdRAFeletyosqA&w=1280` ,
    title: "You Are Born",
    author: "A.P.J. Abdul Kalam",
    price: 700,
    actualPrice: 1000,
    discount: "30%",
    categoryName: "non-fiction",
    rating: 3.5,
    wishList: false,
    
    cart: false  
  },
  {
    _id: uuid(),
    image:`https://m.media-amazon.com/images/I/71aHmBv498L._AC_UF1000,1000_QL80_.jpg` ,
    title: "Imperfection",
    author: "Junaid Qureshi",
    price: 900,
    actualPrice: 1200,
    discount: "25%",
    categoryName: "self-help",
    rating: 2.5,
    wishList: false,
    
    cart:false 
  },
  {
    _id: uuid(),
    image:`https://m.media-amazon.com/images/I/81R2N4PRuUL._AC_UF1000,1000_QL80_.jpg` ,
    title: "Dairy of Wimpy kid",
    author: "Jeff Kinney",
    price: 680,
    actualPrice: 800, 
    discount: "15%",
    categoryName: "fiction",
    rating: 4.5,
    wishList: false,
    
    cart:false 
  },
];
