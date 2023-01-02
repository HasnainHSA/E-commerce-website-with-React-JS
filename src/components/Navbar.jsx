import React from 'react'
import '../App.css'
import Image from '../images/logo1.png'
import { Link } from 'react-router-dom'
import { BsFillBagFill } from "react-icons/bs";
import { CgProfile } from 'react-icons/cg'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const {totalQuantities} = useSelector(state => state.CartReducer)
  return (
    <>
<div className="nav">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to="/"><div id="shopName"><b>HSA</b>Store</div></Link>
                    </div>
                    <div className="nav__right">
                        <Link to="/cart">
                            <div className="basket">
                             <BsFillBagFill className="cart-icon" />
    <span>{totalQuantities}</span>
                            </div>
                            
                        </Link>
                        
                    </div>
                    <Link to="/login" ><button className='btn1'>login</button> </Link>
                    <Link to="/signup"> <button className='btn1'>Sign</button> </Link>
                </div>
            </div>
        </div>
        </>
  )
}

export default Navbar