import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import '../css/products.css'
import { useAuth } from '../context/AuthContext';

function Products() {
  const [products, setProducts] = useState([]);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);
  if (isLoggedIn) {
    return (
      <div className="container products-list">
        <div className="row rowofproducts">
          {products.map((prod) => (
            <div className="col-sm-4 product-cardd" key={prod.id}>
              <img src={prod.image} alt={prod.title} className="imgofproduct"/>
              <h3 className="titleofproduct">{prod.title}</h3>
              <p className="smalldesc">{prod.description}</p>
              <span className="price">${prod.price}</span>
              <Link to={`/products/${prod.id}`} className="info">more info</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }else{
    return(
      <h1 style={{margin:'400px auto' , textAlign:'center'}}>YOU MUST LOGIN</h1>
    )
  }
  
}

export default Products;
