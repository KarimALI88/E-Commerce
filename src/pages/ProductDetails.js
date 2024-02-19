import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/productdetails.css";

function ProductDetails() {
  const { prodId } = useParams();
  const [product, setProduct] = useState({});
  const [disabled , setDisabled] = useState(false)

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${prodId}`)
      .then((response) => {
        // Handle the response data
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, [prodId]);

  // add to cart
  const addToCart = (id, image, category, title, price) => {
    axios
      .post(`http://localhost:3000/cart`, {
        id: id,
        image: image,
        category: category,
        title: title,
        price: price,
      })
      .then((res) => {
        console.log(res.data);
        console.log("added");
        setDisabled(true)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container product-card">
      <div className="row product-row">
        <div className="col-sm-6 product-img">
          <img className="pro-img" src={product.image} alt="" />
        </div>
        <div className="col-sm-6 product-description">
          <h3 className="pro-title">{product.title}</h3>
          <p className="pro-desc">{product.description}</p>
          <span className="pro-price">$ {product.price}</span>
          <button
          className={disabled ? 'disabled' : 'notdisabled'}
            onClick={() =>
              addToCart(
                product.id,
                product.image,
                product.category,
                product.title,
                product.price
              )
            }
            disabled={disabled}
          >
            {disabled === false ? 'Add to cart' : 'added successfully'} <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
