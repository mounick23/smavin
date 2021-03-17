import React, { useEffect, useState } from "react";
import { getProduct, productStar } from "../functions/product";
import SingleProduct from "../components/cards/SingleProduct";
import { useSelector } from "react-redux";
import { getRelated } from "../functions/product";
import ProductCard from "../components/cards/ProductCard";
import Search from "../components/forms/Search";
import allhead from "../components/svg/allhead.svg";
import productimg from "../components/svg/productimg.svg";
import { ImLocation } from 'react-icons/im';
import "./Home.css";
import { Link } from "react-router-dom";

const Courze = ({ match }) => {
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  const [star, setStar] = useState(0);
  // redux
  const { user } = useSelector((state) => ({ ...state }));

  const { slug } = match.params;

  const {sug} = product.course1 && product.course1.split("@")[0];

  useEffect(() => {
    loadSingleProduct();
  }, [slug ]);

  useEffect(() => {
    if (product.ratings && user) {
      let existingRatingObject = product.ratings.find(
        (ele) => ele.postedBy.toString() === user._id.toString()
      );
      existingRatingObject && setStar(existingRatingObject.star); // current user's star
    }
  });

  const loadSingleProduct = () => {
    getProduct(slug).then((res) => {
      setProduct(res.data);
      // load related
      getRelated(res.data._id).then((res) => setRelated(res.data));
    });
  };

  const onStarClick = (newRating, name) => {
    setStar(newRating);
    console.table(newRating, name);
    productStar(name, newRating, user.token).then((res) => {
      console.log("rating clicked", res.data);
      loadSingleProduct(); // if you want to show updated rating in real time
    });
  };

 
  
  function Monk() {
    return (
      <div className="courseitem">
      <h5>{product.course2 && product.course2.split("@")[0]}</h5>
      <div className="d-flex py-2 justify-content-between">
        <div>
          <div className="chead">DURATION</div>
          <div className="ctail">{product.course2 && product.course2.split("@")[1]}</div>
        </div>
        <div>
          <div className="chead">1ST YEAR TUTION FEE</div>
          <div className="ctail">{product.course2 && product.course2.split("@")[3]}</div>
        </div>
        <div>
          <div className="chead">EXAMS ACCEPTED</div>
          <div className="ctail">{product.course2 && product.course2.split("@")[2]}</div>
        </div>
        <div className="viewd pt-2">
          <div className="px-4 pt-1">View Details</div>
        </div>
      </div>
    </div>
    )
  }
  
  
  
  

  return (
    <div className="f container-fluid  mx-auto ">
      <div className="conshop" style={{ backgroundImage: `url(${allhead})` }}>
        <Search />
      </div>
      <div className="productimo">
        <div
          className="productim"
          style={{ backgroundImage: `url(${productimg})` }}
        >
          <div className="productim1">
            <div className="d1">
              <div className="c1">
                <img
                  src="https://image.shutterstock.com/image-vector/university-logo-template-260nw-358581281.jpg"
                  alt=""
                />
              </div>
              <div className="c2">
                {product.title}
                <div className="bloc"> <ImLocation /> {product.location} 
                <div className="dbroch"> Download Brochure</div>
                </div>
              </div>
            </div>
            <div className="d2 ">
              <div className="over">
               <h3>Overview</h3> 
              </div>
              <div className="over">
                <h3>
                  Gallery</h3>
              </div>
              <div className="over">
                <h3>Courses</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <h3>About This University</h3>
        <p>{product.description}</p>
        <p>{product.description}</p>
      </div>
      <div className="bcourses">
        <h1>Available courses</h1>
        <div className="courseitem">
          <h5>{product.course1 && product.course1.split("@")[0]}</h5>
          <div className="d-flex py-2 justify-content-between">
            <div>
              <div className="chead">Duration</div>
              <div className="ctail">{product.course1 && product.course1.split("@")[1]}</div>
            </div>
            <div>
              <div className="chead">1ST YEAR TUTION FEE</div>
              <div className="ctail">{product.course1 && product.course1.split("@")[3]}</div>
            </div>
            <div>
              <div className="chead">EXAMS ACCEPTED</div>
              <div className="ctail">{product.course1 && product.course1.split("@")[2]}</div>
            </div>
            <div className="viewd pt-2">
              <div className="px-4 pt-1"><Link to={`/product/${slug}/${product.course1 && product.course1.split("@")[0]}`}>
              View Details
              </Link></div>
            </div>
          </div>
        </div>
        <div className="courseitem">
          <h5>{product.course2 && product.course2.split("@")[0]}</h5>
          <div className="d-flex py-2 justify-content-between">
            <div>
              <div className="chead">DURATION</div>
              <div className="ctail">{product.course2 && product.course2.split("@")[1]}</div>
            </div>
            <div>
              <div className="chead">1ST YEAR TUTION FEE</div>
              <div className="ctail">{product.course2 && product.course2.split("@")[3]}</div>
            </div>
            <div>
              <div className="chead">EXAMS ACCEPTED</div>
              <div className="ctail">{product.course2 && product.course2.split("@")[2]}</div>
            </div>
            <div className="viewd pt-2">
              <div className="px-4 pt-1">View Details</div>
            </div>
          </div>
        </div>
        <div className="courseitem">
          <h5>{product.course3 && product.course3.split("@")[0]}</h5>
          <div className="d-flex py-2 justify-content-between">
            <div>
              <div className="chead">DURATION</div>
              <div className="ctail">{product.course3 && product.course3.split("@")[1]}</div>
            </div>
            <div>
              <div className="chead">1ST YEAR TUTION FEE</div>
              <div className="ctail">{product.course3 && product.course3.split("@")[3]}</div>
            </div>
            <div>
              <div className="chead">EXAMS ACCEPTED</div>
              <div className="ctail">{product.course3 && product.course3.split("@")[2]}</div>
            </div>
            <div className="viewd pt-2">
              <div className="px-4 pt-1">View Details</div>
            </div>
          </div>
        </div>
        <Monk/>
        <Monk/>
        <Monk/>
        <Monk/>
        <Monk/>
        <Monk/>
        <Monk/>
        <Monk/>
        <Monk/>
        <Monk/>
        <Monk/>
        <Monk/>

      </div>

      <div className="">
      <div className="related">Students who viewed this university also viewed</div>
      <div className="row pb-5">
        {related.length ? (
          related.map((r) => (
            <div key={r._id} className="col-md-4">
              <ProductCard product={r} />
            </div>
          ))
        ) : (
          <div className="text-center col">No Products Found</div>
        )}
      </div>
        </div>
      <div className="row pt-4">
        <SingleProduct
          product={product}
          onStarClick={onStarClick}
          star={star}
        />
      </div>

      <div className="row">
        <div className="col text-center pt-5 pb-5">
          <hr />
          <h4>Related Products</h4>
          <hr />
        </div>
      </div>

      <div className="row pb-5">
        {related.length ? (
          related.map((r) => (
            <div key={r._id} className="col-md-4">
              <ProductCard product={r} />
            </div>
          ))
        ) : (
          <div className="text-center col">No Products Found</div>
        )}
      </div>
    </div>
  );
};

export default Courze;
