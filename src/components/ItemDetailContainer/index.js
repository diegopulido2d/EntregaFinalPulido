import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from "../Spinner/Spinner";
import "./style.css";

import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId } from "firebase/firestore"

const ItemDetailContainer = () => {

  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  
  let {id} = useParams();

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
                return <div className='detail' key={data.key}>
                        <div className="detailContainer">
                            <img src={data.img} alt=""></img>
                            <div className='detailInfo'>
                            <h2>{data.name}</h2>
                            <p>{data.description}</p>
                            <h5>${data.price} USD</h5>
                            </div>
                        </div>
                      </div>
              })
            )}
    </>
      
  )
}

export default ItemDetailContainer