import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./style.css";
import UserGreeting from "../UserGreeting";
import ItemList from "../ItemList";
import Item from "../Item";
import axios from 'axios';
//import { fetchCopy } from "../../utils/getMock";
//import { stock } from "../../utils/stock";

const ItemListContainerHome = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/`)
        .then((res) => {setProducts(res.data); console.log(res.data)})
        .catch((error) => {console.error(error)});
    },[]);

    return (
        <div className="itemListContainer">
            <UserGreeting username="Diego" />
            <ItemList>
                {products.map((i) => (
                    <li key={i.id}>
                        <Link to={`/product/${i.id}`}>
                            <Item 
                                name = {i.title}
                                price = {i.price}
                                image = {i.image}
                            />
                        </Link>
                    </li>
                ))}
            </ItemList>
        </div>
    )
}

export default ItemListContainerHome