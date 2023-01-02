import React from 'react'
import '../styling/Order.css'

const Ordersuccessful = () => {
  return (
    // <!-- OREDER PLACED -->
    <div id="orderContainer">
        <div id="check"><i class="fas fa-check-circle"></i></div>
        
        <div id="aboutCheck">
            <h1> Order Placed Successfully! </h1>
            <p> We've sent you an email with the Order details. </p>
        </div>
    </div>
  )
}

export default Ordersuccessful;