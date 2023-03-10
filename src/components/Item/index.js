import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Item = ({name, price, image}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={image}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {price} USD
            </Typography>
        </CardContent>
        </Card>
    )
}

export default Item