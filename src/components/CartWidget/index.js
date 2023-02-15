import "./style.css";
import cartIcon from "../../assets/images/shopping-cart.png"

const CartWidget = ({notificationNumber, url}) => {
    return (
        <div className="cartWidget">
            <a href={url}>
                <img src={cartIcon} alt=""/>
                <h3>({notificationNumber})</h3>
            </a>
        </div>
    )
}

export default CartWidget