import React from "react";
import "../css/footer.css";
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h1>
              <i className="fa-solid fa-address-card"></i> About Us
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

          <div className="col-sm-4">
            <h1><i className="fa-solid fa-circle-exclamation"></i> Important Links</h1>
            <Link to={'/'} className="footerlinks">Home</Link>
            <Link to={'/products'} className="footerlinks">products</Link>
            <Link to={'/bestselling'} className="footerlinks">offers</Link>
            <Link to={'/cart'} className="footerlinks">cart</Link>
          </div>

          <div className="col-sm-4">
            <h1><i className="fa-solid fa-hashtag"></i> Social Links</h1>
            <Link to={'/'} className="sociallinks"><i className="fa-brands fa-facebook"></i></Link>
            <Link to={'/products'} className="sociallinks"><i className="fa-brands fa-instagram"></i></Link>
            <Link to={'/bestselling'} className="sociallinks"><i className="fa-brands fa-youtube"></i></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
