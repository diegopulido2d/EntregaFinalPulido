import React, { useState, useContext } from "react";
import "./style.css";

// Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import MessageSuccess from "../MessageSuccess/MessageSuccess";
import TextField from "@mui/material/TextField";
import { ItemsContext } from "../../context/ItemsContext";


const initialState = {
  name: "",
  lastName: "",
  email: "",
};

const CheckoutForm = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");
  const {items} = useContext(ItemsContext);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value, order: items });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "orders"), {
      values,
    });
    // console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div>
      <form className="FormContainer" onSubmit={handleOnSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 400 }}
          name="lastName"
          value={values.lastName}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="E-mail"
          style={{ margin: 10, width: 400 }}
          name="email"
          value={values.email}
          onChange={handleOnChange}
        />
        <button className="btnASendAction">Buy Now</button>
      </form>
      {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
    </div>
  );
};

export default CheckoutForm;
