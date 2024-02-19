import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import "../css/category.css";

function CategorySlider(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${props.category}`)
      .then((response) => {
        // Handle the response data
        setCategories(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, [props.category]);

  return (
    <div className="container cat-container">
      <h1 className="cat-title">{props.category}</h1>
      <div className="row cat-row">
        {categories.map((category) => (
          <div className="col-4 cat-card" key={category.id}>
            <Link to={`/products/${category.id}`}><img src={category.image} alt="" /></Link>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default CategorySlider;
