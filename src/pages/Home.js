import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import BestCourses from "../components/home/BestCourses";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import "./Home.css";
import Search from "../components/forms/Search";
import home from "../components/svg/home.svg";
import dback from "../components/svg/dback.svg";

import download from "../components/svg/download.jpeg";
import img from "../components/svg/img.jpg";
import { GiGraduateCap, GiArchiveResearch } from "react-icons/gi";
import { BiMessageAltDetail } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { RiPlaneLine } from "react-icons/ri";
import {
  FaUserGraduate,
  FaGlobeAmericas,
  FaSearchLocation,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="f container-fluid  mx-auto">
      <div className="con" style={{ backgroundImage: `url(${home})` }}>
        <Search />
      </div>

      <div className="jumbotron text-danger h1 font-weight-bold text-center">
        <Jumbotron
          text={[
            "Find Best College",
            "Best Countries to Study MS",
            "We Don`t Charge for Admission",
          ]}
        />
      </div>

      <div className="newu text-center p-3 mt-5 mb-5">
        <GiGraduateCap /> <div className="newui">popular Universities</div>
      </div>
      <NewArrivals />


      <h4 className="newu text-center p-3 mt-5 mb-5">
        <FaUserGraduate />
        <div className="newui">Best Courses</div>
      </h4>
      <BestCourses />


      <h4 className="newu text-center p-3 mt-5 mb-5">
        <FaGlobeAmericas /> <div className="newui">Countries</div>
      </h4>
      <CategoryList />

      <h4 className="newu text-center p-3 mt-5 mb-5 ">
        <FaSearchLocation /> <div className="newui">Location</div>
      </h4>
      <SubList />

      <h4 className="newu text-center p-3 mt-5 mb-5 ">
        <GiArchiveResearch /> <div className="newui">Explore Our Services</div>
      </h4>
      <div className="d-flex justify-content-around">
        <div className="ecard">
          <div className="eos">
            <GiArchiveResearch />
          </div>
          ITELTS & GRE
        </div>
        <div className="ecard">
          <div className="eos">
            <BiMessageAltDetail />
          </div>
          SOP
        </div>
        <div className="ecard">
          <div className="eos">
            <IoIosPaper />
          </div>
          LOR
        </div>
        <div className="ecard">
          <div className="eos">
            <RiPlaneLine />
          </div>
          STUDENT VISA
        </div>
        <div className="ecard">
          <div className="eos">
            <GiGraduateCap />
          </div>
          STUDENT CV
        </div>
      </div>
  <div className="d-flex justify-content-center mt-5">
    <div className="downba" style={{ backgroundImage: `url(${dback})` }}>
 <a> Confused? Have Queries? We are here to help you! 
    </a>  
 <p>my name is mounick Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit  Velit officia consequat duis enim velit </p>
<div className="bnj">Book a Consultation</div>
  </div>
 </div>      <br />
      <br />
    </div>
  );
};

export default Home;

//my name
/*

      <h4 className="newu text-center p-3 mt-5 mb-5">
        <FaUserGraduate />
        <div className="newui">Best Universities</div>
      </h4>
      <BestSellers />
*/