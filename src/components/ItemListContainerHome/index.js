import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner"
import "./style.css";
import Item from "../Item";

import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore"

const ItemListContainerHome = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        
        const getProducts = async () => {

            const q = query(collection(db, "products"));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) =>{ 
                docs.push({...doc.data(), id:doc.id})
            });
            setProducts(docs);

        }
        getProducts();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    },[]);

    return (
        <>
          {loading ? (
            <div className="itemListContainer">
                <h2>🍁 Welcome! 🍁</h2>
                <div className="spinner">
                    <Spinner />
                </div>
            </div>
          ) : (
            <div className="itemListContainer">
                <h2>🍁 Welcome! 🍁</h2>
                <ul>
                    {products.map((i) => (
                        <li key={i.id}>
                            <Link to={`/product/${i.id}`}>
                                <Item 
                                    name = {i.name}
                                    price = {i.price}
                                    image = {i.img}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>)}
        </>
    )
}

export default ItemListContainerHome