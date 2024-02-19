import React, { useEffect, useState } from "react";
import "../css/offers.css";
import axios from "axios";
import Confetti from "react-confetti";

function Offers() {
  const [products, setProducts] = useState([]);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/offers")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        // Set showConfetti to false after a delay (e.g., 3 seconds)
        setTimeout(() => {
          setShowConfetti(false);
        }, 6000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container products-list">
      {showConfetti && <Confetti numberOfPieces={1000}  className="confetti"/>}
      <h1 className="offers-title"> <i className="fa-solid fa-gift"></i> OFFERS <i className="fa-solid fa-gift"></i></h1>
      <div className="row rowofproducts">
        {products.map((prod) => (
          <div className="col-sm-4 product-cardd" key={prod.id}>
            <img src={prod.image} alt={prod.title} className="imgofproduct" />
            <h3 className="titleofproduct">{prod.title}</h3>
            <span className="pricebefore">price before the offer: ${prod.price_before}</span>
            <span className="priceafter">price after the offer: ${prod.price_after}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
