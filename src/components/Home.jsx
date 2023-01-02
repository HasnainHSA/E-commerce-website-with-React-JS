import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import '../styling/Home.css'
// Importing firebase services 
import { auth, db } from '../firebaseConfigs/Firebase'
// Importing firebase firestore database services
import { collection, getDocs, query, where } from 'firebase/firestore'
// redux
import { useSelector } from 'react-redux'
// for c
import currencyFormatter from 'currency-formatter'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  
  const Getcurrentdata = () =>{
   const [user, setUser] = useState("")
   const collectionRef = collection(db ,"usersData")

   useEffect(()=>{
    auth.onAuthStateChanged(userlogged=>{
      if (userlogged) {
        const getUsers = async () =>{
          const q = query(collection(db ,"usersData"), where("uid", "==", userlogged.uid))
          // console.log(q)
          const data = await getDocs(q)
          setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        }
        getUsers()
      }
      else{
        setUser(null)
      }
    })
   },[])
   return user
  }
  
  const loggeduser = Getcurrentdata()
  if(loggeduser){console.log(loggeduser[0].email)}


  const {products} = useSelector(state => state.ProductsReducer)
  console.log(products)
  return (
    <div>
    <Navbar />
    <Header />
    <p id='para1'>Username: {loggeduser? loggeduser[0].username:"no data"}</p>
   <div className="container">
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-3">
            <div className="product">
              <div className="product-img">
                <Link to={`/details/${product.id}`}><img src={product.image} alt={product.name} /></Link>
                
              </div>
              <div className="product-name">
                {product.name}
              </div>
              <div className="row">
                <div className='col-6'>
                  <div className='product-price'>
                    {currencyFormatter.format(product.price, { code: 'USD' })} <span>{product.discount}</span>
                  </div>
                  <div className="col-6">
                    <div className="product-discount-price">
                      {product.discountPrice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      ))}
    </div>
   </div>

   <Footer />
   
   </div>
    
  )
}

export default Home