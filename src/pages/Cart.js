import React, { useEffect, useState } from "react";
import "../css/cart.css";
import axios from "axios";
import { useCount } from "../context/ItemCountContext";
import  {useNavigate , Link }  from "react-router-dom";
import Swal from "sweetalert2";

function Cart() {
  const [products, setProducts] = useState([]);
  const { setItemCount } = useCount();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/cart`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setItemCount(products.length);
      })
      .catch((err) => console.log(err));
  }, [products.length, setItemCount]);

  console.log(products.length);

  const deleteItem = (id) => {
    Swal.fire({
      title: `are you sure to delete product number ${id} ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        axios
          .delete(`http://localhost:3000/cart/${id}`)
          .then((res) => {
            console.log("Deleted successfully");
            setProducts((prevProducts) =>
              prevProducts.filter((product) => product.id !== id)
            );
            setItemCount((prevCount) => prevCount - 1); // Adjust count when deleting an item
          })
          .catch((err) => console.log(err));
      }
    });
  };

  const confirmAlert = () => {
    Swal.fire({
      title: "All Products are Confirmed ",
    }).then((data) => {
      console.log(data)
      if(data.isConfirmed){
        navigate('/confirm')
      }
    });
  };

  return (
    <div className="container cart-container">
      <h1 className="container-title">Your Cart</h1>
      <div className="row cart-row">
        {products.map((product) => (
          <div className="col-sm-4 cart-card" key={product.id}>
            <img src={product.image} alt="" className="cart-img" />
            <h3 className="cart-title">{product.title}</h3>
            <h6 className="cart-category">{product.category}</h6>
            <span className="cart-price">${product.price}</span>
            <button
              className="del-button"
              onClick={() => deleteItem(product.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="confirm-button">
        {products.length > 0 && (
          <button onClick={confirmAlert}>
            <Link className="confirm-link">Confirm</Link>
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
