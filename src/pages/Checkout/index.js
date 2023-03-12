import React, { useContext } from "react";
import "./style.css";
import CheckoutForm from '../../components/CheckoutForm';

import { ItemsContext } from "../../context/ItemsContext";

const Checkout = () => {

  const { items } = useContext(ItemsContext);
  let finalTotal = 0;
  

  return (
    <>
    <h2 className="checkoutTitle">Checkout</h2>
    <div className="checkoutContainer">
      <div className="checkoutCardContainer">  
          {items.map((item) => {  

            const productTotal = item.price * item.quantity;
            finalTotal = finalTotal + productTotal;

            return <div className="checkoutProductCard" key={item.id}>
                    <div className="checkoutImageHolder">
                      <img src={item.img} alt=""/>
                    </div>
                    <div className="checkoutProductCardName">
                      <h4>{item.name}</h4>
                      <div>    
                        <p>${item.price},00</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="checkoutProductTotal">Product Total: ${productTotal},00</p>
                  </div>
          })} 
      </div>
      <div>
        <div className="checkoutTotalContainer">
          <h2>Total: ${finalTotal},00</h2>
        </div>
        <CheckoutForm />
      </div>
    </div>
    </>
    
  )
}

export default Checkout