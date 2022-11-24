import React, { useState, useEffect } from 'react';
import Products from '../../Components/Product';
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../Components/Loading'
import Container from '@mui/material/Container';
import SearchBar from '../../Components/SearchBar'
import Alert from '@mui/material/Alert';


export default function Dashboard() {
  const { error, success, products } = useSelector((state) => state)

  return (
    <React.Fragment>
      {error ?
        <Alert severity="error">{error}</Alert>
        : null
      }
      {success ?
        <Alert severity="success">
          {success}
        </Alert>
        : null
      }

      <SearchBar></SearchBar>
      <Container>
        {
          products ? products.map((product) => {
            return <Products product={product}></Products>
          }) : <Loading></Loading>
        }
      </Container>
    </React.Fragment>
  );
};

