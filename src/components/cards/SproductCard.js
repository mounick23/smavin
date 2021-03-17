import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import "./Sprod.css";
const { Meta } = Card;

const SproductCard = ({ product }) => {
  // destructure
  const { images, title, location, description, slug, price } = product;
  return (
    <>
      <div className="cvb d-flex">
       <div className="bbnm">
       <img
          src={images && images.length ? images[0].url : laptop}
          style={{
            height: "225px",
            borderradius: "10px",
            width: "253px",
            objectFit: "cover",
          }}
          className="bnm p-1"
        />
       </div>
        
        <div className="rty">
          <div className="rtyu">
            <div className="bnm1">{title}</div>
            <div className="bnm2">{location}</div>
          </div>
          <div className="q">
              <div className="q1"><h5>UNIVERSITY TYPE</h5>
              <h6>Public</h6></div>{" "}
            <br />
            <div className="q1"><h5>SCHOLARSHIP OFFERED</h5>
            <h6>Yes</h6>
            </div>
          </div>
     
          <div className="dfgh">
            <Link to={`/product/${slug}`}>
              <div className="dfg">View College</div>{" "}
            </Link>
            <br />
            <div className="fgh"> Download Brochure</div>
          </div>
        </div>
        <div className="qwer">
        12 COURSES OFFERED
        <div className="qwe">
          <div>Big Data</div>
          <div>Mechanical</div>
          <div>Aerospace</div>
          <div>Computer Science</div>
       <div>Electrical & Electronics</div>
<div>Pharmacy</div>
<div>Economics</div>
<div>Fashion Designing</div>
<div>Artificial Intellegence</div>

       
      </div>
        </div> 
    </div>
    </>
  );
};

export default SproductCard;
