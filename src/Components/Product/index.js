import React from 'react';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material'
import './style.css';
import { useDispatch } from 'react-redux';
import { purchaseProduct } from '../../Actions/index'



export default function Products(props) {

  const dispatch = useDispatch()

  const product = props.product;
  return (
    <Card sx={{ maxWidth: 345 }} xs={4} md={4}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require(`../../Assets/images/${product.image}`)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Rating name="read-only" value={Number(product.rating)} readOnly />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => dispatch(purchaseProduct(product))}>
          purchase
        </Button>
      </CardActions>
    </Card>
  );
};
