import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Products from '../../Components/Product';
import Footer from '../../Layouts/Footer';
import Header from '../../Layouts/Header';
import './style.css'

import Container from '@mui/material/Container';



export default function Dashboard() {
  const [product, setProduct] = useState();

  const url = "http://localhost:3000/products";


  useEffect(() => {
    axios.get(url).then((res) => {
      setProduct(res.data);
      console.log(product, 'hu');
    });

  }, []);

  return (
    <>
      <Header></Header>
      <Container>

        {

          product ? product.map((product) => {
            return <Products product={product}></Products>
          }) : 'Loading ...'
        }
      </Container>
      <Footer> </Footer>
    </>
  );
};

