import React from 'react';
import "./style.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const Item = ({name, price, image}) => {
    return (
        <Card sx={{ width: 280 }}>
        <CardMedia
            sx={{ height: 350 }}
            image={image}
        />
        <CardContent>
            <h5>{name}</h5>
            <h6>${price},00</h6>
        </CardContent>
        </Card>
    )
}

export default Item