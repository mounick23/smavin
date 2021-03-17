import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import "./Sprod.css";
import { ImLocation } from 'react-icons/im';

const { Meta } = Card;

const ProductCard = ({ product }) => {
  // destructure
  const { images, title, location, description, slug, price } = product;
  return (
      <div className="mcard">
        <img
          src={images && images.length ? images[0].url : laptop}
          style={{ objectFit: "cover" }}
          className="p-1"
        />
        <div className="gh">
                <div className="cardt">{title}</div>
        <div className="cardl"><ImLocation/>{location && location.split("|")[0]}</div>
        <div className="cardp">{location && location.split("|")[1]} |{location && location.split("|")[2]}</div>
      </div>
    <div className="mview">
          <Link to={`/product/${slug}`}>
            <div className="vb">View University</div>
          </Link>
        </div>
      </div>
  );
};

export default ProductCard;
