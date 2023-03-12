import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

import "./style.css";
import Item from "../Item";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore"

const Category = () => {

    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);

    let {id} = useParams();

    useEffect(() => {

    setLoading(true);

    const getProduct = async () => {

      const q = query(collection(db, "products"), where("category", "==", id));
      const querySnapshot = await getDocs(q);
      
      const docs = [];
      querySnapshot.forEach((doc) =>{ 
          docs.push({...doc.data(), id:doc.id})
      });
      
      setCategory(docs);

    }
    getProduct();
    setTimeout(() => {
        setLoading(false);
    }, 1000);
        
    },[id]);

    return (
        <>
          {loading ? (
            <div className="itemListContainer">
                <div className="spinner">
                    <Spinner />
                </div>
            </div>
          ) : (
            
            <div className="itemListContainer">
                <h2>{id}</h2>
                <ul>
                    {category.map((i) => (
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
            </div>
            )}
        </>
    )
}

export default Category