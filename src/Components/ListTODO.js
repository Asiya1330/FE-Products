import axios from 'axios';
import React, { Fragment, Component, useState, useEffect } from 'react';
import Products from './Product';



export default function ToDoList() {
  const [product, setProduct] = useState();
  const url = "http://localhost:3000/products";


  useEffect(() => {
    axios.get(url).then((res) => {
      setProduct(res.data);
    });

  }, []);


  console.log(product, "test");
  return (
    <Fragment>

      <ul>
        {
          <div>
            
            {
              product ? product.map((product) => {
                return <Products product={product}></Products>
              }) : 'no products'
            }
          </div>
        }
      </ul>
    </Fragment>
  );
};

