import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import "./Coursecard.css";
import { ImLocation } from "react-icons/im";

const { Meta } = Card;

const CourseCard = ({ product }) => {
  // destructure
  const {
    images,
    title,
    location,
    description,
    course1,
    category,
    slug,
    price,
  } = product;
  return (
    <div className="mcard1">
      <div className="catname px-2"> IN {category.name}</div>
      {title}
      <img
        src={images && images.length ? images[0].url : laptop}
        style={{ objectFit: "cover" }}
        className="p-1"
      />
      <div className="gh1">
        <div className="cardl1">
          <ImLocation />
          {location && location.split("|")[0]}
        </div>

        <div className="cardt1">{course1 && course1.split("@")[0]}</div>
        <div className="cardl1">
          course duration:
          {course1 && course1.split("@")[1]}
        </div>
        <div className="cardp1">
          Fee per year:{course1 && course1.split("@")[3]}
        </div>
      </div>
      <div>exams required: {course1 && course1.split("@")[2]}</div>
      <div className="mview1">
        <Link to={`/product/${slug}`}>
          <div className="vb1">View Collage</div>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
