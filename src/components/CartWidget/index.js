import React, { useContext } from "react";
import "./style.css";
import cartIcon from "../../assets/images/shopping-cart.png";
import { Link } from "react-router-dom";

import { ItemsContext } from "../../context/ItemsContext";

const CartWidget = () => {

    const {cartQuantity} = useContext(ItemsContext);

    return (
        <div className="cartWidget">
            <Link to="/checkout">
                <img src={cartIcon} alt=""/>
                <h3>({cartQuantity})</h3>
            </Link>
        </div>
    )
}

export default CartWidget