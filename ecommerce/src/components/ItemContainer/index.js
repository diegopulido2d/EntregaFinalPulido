import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./style.css";

const ItemContainer = () => {

  const [detail, setDetail] = useState({})
  let {id} = useParams();

  useEffect(() => {

    axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {setDetail(res.data); console.log(res.data)})
      .catch((error) => {console.error(error)});
      
  },[id]);

  return (
      <div className='detail'>
        <div className="detailContainer">
            <img src={detail.image} alt=""></img>
            <div className='detailInfo'>
            <h2>{detail.title}</h2>
            <p>{detail.description}</p>
            <h5>${detail.price} USD</h5>
            </div>
        </div>
      </div>
  )
}

export default ItemContainer