import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import Products from './Product';


// will move api fetching work in this file
export default function FetchProducts() {
    const [product, setProduct] = useState();
    const url = "http://localhost:3000/products";


    useEffect(() => {
        axios.get(url).then((res) => {
            setProduct(res.data);
        });
    }, []);

    getProductsFromChild = () => {
                  
    }
    return (
        <Fragment>

        </Fragment>
    );
};

