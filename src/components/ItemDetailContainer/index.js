import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from "../Spinner/Spinner";
import "./style.css";

import { ItemsContext } from "../../context/ItemsContext";

import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId } from "firebase/firestore"

const ItemDetailContainer = () => {

  const {items, setItems, setCartQuantity} = useContext(ItemsContext);
  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  
  let {id} = useParams();

  const handleDecrement = () => {
    quantity > 1 ? 
    setQuantity(quantity-1)
    :
    <></>
  };
  const handleIncrement = () => {
    setQuantity(quantity+1)
  };

  const addToCart = () => {
    
    const {name, img, price} = productDetail[0];
    
    const cartProduct = {
      "name": name,
      "img": img,
      "price": price,
      "quantity": quantity
    };

    const newCart = items;
    newCart.push(cartProduct);
    setItems(newCart);
    setCartQuantity(items.length);

  }

  useEffect(() => {

    setLoading(true);

    const getProduct = async () => {

      const q = query(collection(db, "products"), where(documentId(), "==", id));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) =>{ 
          docs.push({...doc.data(), id:doc.id})
      });
      setProductDetail(docs);

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
              productDetail.map((data) => {
                return <div className='detail' key={data.id}>
                        <div className="detailContainer">
                            <img src={data.img} alt=""></img>
                            <div className='detailInfo'>
                            <h2>{data.name}</h2>
                            <p>{data.description}</p>
                            <h5>${data.price},00 USD</h5>
                            <div className='purchaseContainer'>
                              <button className='cartButton' onClick={addToCart}>Agregar al carrito</button>
                              <div className='quantitySelector'>
                                <button onClick={handleDecrement}>-</button>
                                <p>{quantity}</p>
                                <button onClick={handleIncrement}>+</button>
                              </div>
                            </div>
                            </div>
                        </div>
                      </div>
              })
            )}
    </>
      
  )
}

export default ItemDetailContainer