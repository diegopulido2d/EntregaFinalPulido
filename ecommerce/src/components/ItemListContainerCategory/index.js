import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import ItemList from "../ItemList";
import Item from "../Item";
import axios from 'axios';

const Category = () => {

    const [category, setCategory] = useState([])
    let {id} = useParams();

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/category/${id}`)
        .then((res) => {setCategory(res.data); console.log(res.data)})
        .catch((error) => {console.error(error)});
    },[id]);

    return (
        <div className="itemListContainer">
            <ItemList>
                {category.map((i) => (
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

export default Category