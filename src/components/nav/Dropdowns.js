import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
//import Courses from "./Dropdown/Courses";

const Dropdowns = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);



  return (
    <>
      <div className="Navbar">
        <div className="leftside">
          <div className="linksh" id={showLinks ? "hidden" : ""}>
            <button
              className="sg"
              onMouseEnter={() => setIsShown3(true)}
              onMouseLeave={() => setIsShown3(false)}
            >
              <Link to="/more" className="links">
                Colleges
              </Link>
              {isShown3 && (
                <div
                  className="dropdownc"
                  onMouseEnter={() => setIsShown3(true)}
                  onMouseLeave={() => setIsShown3(false)}
                >
           <div className="leftdrop">
                    <div className="m1">
                    <Link className="links ">
                 <p>Beginner Doubts  </p>   
                      </Link>
                    <Link to="/" className="links">
                      Best country to study abroad?
                    </Link>
                    <Link to="/" className="links">
                      Most affordable countries?
                    </Link>
                    <Link to="/" className="links">
                      Most immigration friendly country?
                    </Link>
                    <Link to="/" className="links">
                      Country with best education system?
                    </Link>
                    <Link to="/" className="links">
                      How to choose the right country?
                    </Link>
                    </div>
                   
                  </div>
                  <div className="rightdrop1">
                    <div className="d">
                    <Link className="links">
                 <p> USA  </p>   
                      </Link>
<Link to="/" className="links ">
Beginner Guide
                      </Link>
                      <Link to="/" className="links">
                      Visa Guide
                      </Link>
                      <Link to="/" className="links">
                      Living in USA
                      </Link>
                      <Link to="/" className="links">
                      Average living costs
                      </Link>
                      <Link to="/" className="links">
                      Popular job sectors
                      </Link>
                      <Link to="/" className="links">
                      Post study work
                      </Link>
                      <Link to="/" className="links">
                      Explore
                      </Link>
                      <Link to="/" className="links">
                      Universities in USA
                      </Link>
                      <Link to="/" className="links">
                      Study in USA
                      </Link>


                    </div>
                    <div className="d"> <Link className="links">
                 <p> Canada  </p>   
                      </Link>
<Link to="/" className="links">
Beginner Guide
                      </Link>
                      <Link to="/" className="links">
                      Visa Guide
                      </Link>
                      <Link to="/" className="links">
                      Living in USA
                      </Link>
                      <Link to="/" className="links">
                      Average living costs
                      </Link>
                      <Link to="/" className="links">
                      Popular job sectors
                      </Link>
                      <Link to="/" className="links">
                      Post study work
                      </Link>
                      <Link to="/" className="links">
                      Explore
                      </Link>
                      <Link to="/" className="links">
                      Universities in USA
                      </Link>
                      <Link to="/" className="links">
                      Study in USA
                      </Link></div>
                    <div className="d"> <Link className="links">
                 <p> Italy  </p>   
                      </Link>
<Link to="/" className="links">
Beginner Guide
                      </Link>
                      <Link to="/" className="links">
                      Visa Guide
                      </Link>
                      <Link to="/" className="links">
                      Living in USA
                      </Link>
                      <Link to="/" className="links">
                      Average living costs
                      </Link>
                      <Link to="/" className="links">
                      Popular job sectors
                      </Link>
                      <Link to="/" className="links">
                      Post study work
                      </Link>
                      <Link to="/" className="links">
                      Explore
                      </Link>
                      <Link to="/" className="links">
                      Universities in USA
                      </Link>
                      <Link to="/" className="links">
                      Study in USA
                      </Link></div>
                    <div className="d"> <Link className="links">
                 <p> Other Countries  </p>   
                      </Link>
<Link to="/" className="links">
Beginner Guide
                      </Link>
                      <Link to="/" className="links">
                      Visa Guide
                      </Link>
                      <Link to="/" className="links">
                      Living in USA
                      </Link>
                      <Link to="/" className="links">
                      Average living costs
                      </Link>
                      <Link to="/" className="links">
                      Popular job sectors
                      </Link>
                      <Link to="/" className="links">
                      Post study work
                      </Link>
                      <Link to="/" className="links">
                      Explore
                      </Link>
                      <Link to="/" className="links">
                      Universities in USA
                      </Link>
                      <Link to="/" className="links">
                      Study in USA
                      </Link></div>
                  </div>
                </div>
              )}
            </button>

            <button
              className="sg"
              onMouseEnter={() => setIsShown1(true)}
              onMouseLeave={() => setIsShown1(false)}
            >
              <Link to="/more" className="links">
                Exams
              </Link>
              {isShown1 && (
                <div
                  className="dropdownc"
                  onMouseEnter={() => setIsShown1(true)}
                  onMouseLeave={() => setIsShown1(false)}
                >
                  <div className="leftdrop">
                    <Link to="/" className="links">
                      IELTS{" "}
                    </Link>
                    <Link to="/" className="links">
                      GRE
                    </Link>
                    <Link to="/" className="links">
                      PTE{" "}
                    </Link>
                    <Link to="/" className="links">
                      TOFEL{" "}
                    </Link>
                    <Link to="/" className="links">
                      GMAT{" "}
                    </Link>

                    <Link to="/" className="linksmore">
                      Others >>
                    </Link>
                  </div>
                  <div className="rightdrop">
                    <Link to="/" className="linksway">
                      IELTS
                    </Link>
                    <Link to="/" className="links">
                      IELTS Overview{" "}
                    </Link>
                    <Link to="/" className="links">
                      IELTS Registration{" "}
                    </Link>
                    <Link to="/" className="links">
                      Preparation Guide for IELTS{" "}
                    </Link>
                    <Link to="/" className="links">
                      IELTS vs PTE{" "}
                    </Link>
                    <Link to="/" className="links">
                      IELTS vs TOFEL{" "}
                    </Link>
                  </div>
                </div>
              )}
            </button>

            <button
              className="sg"
              onMouseEnter={() => setIsShown2(true)}
              onMouseLeave={() => setIsShown2(false)}
            >
              <Link to="/more" className="links">
                Courses
              </Link>
              {isShown2 && (
                <div
                  className="dropdownc"
                  onMouseEnter={() => setIsShown2(true)}
                  onMouseLeave={() => setIsShown2(false)}
                >
                  <div className="leftdrop">
                    <Link to="/" className="links">
                      M.S
                    </Link>
                    <Link to="/" className="links">
                      MBA
                    </Link>
                    <Link to="/" className="links">
                      Ph.D
                    </Link>
                    <Link to="/" className="links">
                      B.Sc/B.E
                    </Link>
                    <Link to="/" className="links">
                      M.A
                    </Link>
                    <Link to="/" className="links">
                      B.A
                    </Link>

                    <Link to="/" className="linksmore">
                      Others >>
                    </Link>
                  </div>
                  <div className="rightdrop">
                    <Link to="/" className="linksway">
                      MS
                    </Link>
                    <Link to="/" className="links">
                      M.S In Computer Science
                    </Link>
                    <Link to="/" className="links">
                      M.S In Pharmacy
                    </Link>
                    <Link to="/" className="links">
                      M.S In Biology
                    </Link>
                    <Link to="/" className="links">
                      M.S In Pharmacy
                    </Link>
                    <Link to="/" className="links">
                      M.S In Physiotheraphy
                    </Link>
                    <Link to="/" className="links">
                      M.S In Agriculture
                    </Link>
                    <Link to="/" className="links">
                      M.S In All Specialization
                    </Link>
                  </div>
                </div>
              )}
            </button>
            <button
              className="sg"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <Link to="/more" className="links">
                Carrer Advice
              </Link>
              {isShown && (
                <div
                  className="dropdownc"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  <div className="leftdrop">
                    <div className="m1">
                    <Link className="links ">
                 <p>Beginner Doubts  </p>   
                      </Link>
                    <Link to="/" className="links">
                      Best country to study abroad?
                    </Link>
                    <Link to="/" className="links">
                      Most affordable countries?
                    </Link>
                    <Link to="/" className="links">
                      Most immigration friendly country?
                    </Link>
                    <Link to="/" className="links">
                      Country with best education system?
                    </Link>
                    <Link to="/" className="links">
                      How to choose the right country?
                    </Link>
                    </div>
                   
                  </div>
                  <div className="rightdrop1">
                    <div className="d">
                    <Link className="links">
                 <p> USA  </p>   
                      </Link>
<Link to="/" className="links ">
Beginner Guide
                      </Link>
                      <Link to="/" className="links">
                      Visa Guide
                      </Link>
                      <Link to="/" className="links">
                      Living in USA
                      </Link>
                      <Link to="/" className="links">
                      Average living costs
                      </Link>
                      <Link to="/" className="links">
                      Popular job sectors
                      </Link>
                      <Link to="/" className="links">
                      Post study work
                      </Link>
                      <Link to="/" className="links">
                      Explore
                      </Link>
                      <Link to="/" className="links">
                      Universities in USA
                      </Link>
                      <Link to="/" className="links">
                      Study in USA
                      </Link>


                    </div>
                    <div className="d"> <Link className="links">
                 <p> Canada  </p>   
                      </Link>
<Link to="/" className="links">
Beginner Guide
                      </Link>
                      <Link to="/" className="links">
                      Visa Guide
                      </Link>
                      <Link to="/" className="links">
                      Living in USA
                      </Link>
                      <Link to="/" className="links">
                      Average living costs
                      </Link>
                      <Link to="/" className="links">
                      Popular job sectors
                      </Link>
                      <Link to="/" className="links">
                      Post study work
                      </Link>
                      <Link to="/" className="links">
                      Explore
                      </Link>
                      <Link to="/" className="links">
                      Universities in USA
                      </Link>
                      <Link to="/" className="links">
                      Study in USA
                      </Link></div>
                    <div className="d"> <Link className="links">
                 <p> Italy  </p>   
                      </Link>
<Link to="/" className="links">
Beginner Guide
                      </Link>
                      <Link to="/" className="links">
                      Visa Guide
                      </Link>
                      <Link to="/" className="links">
                      Living in USA
                      </Link>
                      <Link to="/" className="links">
                      Average living costs
                      </Link>
                      <Link to="/" className="links">
                      Popular job sectors
                      </Link>
                      <Link to="/" className="links">
                      Post study work
                      </Link>
                      <Link to="/" className="links">
                      Explore
                      </Link>
                      <Link to="/" className="links">
                      Universities in USA
                      </Link>
                      <Link to="/" className="links">
                      Study in USA
                      </Link></div>
                    <div className="d"> <Link className="links">
                 <p> Other Countries  </p>   
                      </Link>
<Link to="/" className="links">
Beginner Guide
                      </Link>
                      <Link to="/" className="links">
                      Visa Guide
                      </Link>
                      <Link to="/" className="links">
                      Living in USA
                      </Link>
                      <Link to="/" className="links">
                      Average living costs
                      </Link>
                      <Link to="/" className="links">
                      Popular job sectors
                      </Link>
                      <Link to="/" className="links">
                      Post study work
                      </Link>
                      <Link to="/" className="links">
                      Explore
                      </Link>
                      <Link to="/" className="links">
                      Universities in USA
                      </Link>
                      <Link to="/" className="links">
                      Study in USA
                      </Link></div>
                  </div>
                </div>
              )}
            </button>
            <button
              className="sg"
              onMouseEnter={() => setIsShown4(true)}
              onMouseLeave={() => setIsShown4(false)}
            >
              <Link to="/more" className="links">
Blogs
              </Link>
              {isShown4 && (
                <div
                  className="dropdownc"
                  onMouseEnter={() => setIsShown4(true)}
                  onMouseLeave={() => setIsShown4(false)}
                >
                  <div className="leftdrop">
                    <div className="m1">
                    <Link className="links ">
                 <p>Beginner Doubts  </p>   
                      </Link>
                    <Link to="/" className="links">
                      Best country to study abroad?
                    </Link>
                    <Link to="/" className="links">
                      Most affordable countries?
                    </Link>
                    <Link to="/" className="links">
                      Most immigration friendly country?
                    </Link>
                    <Link to="/" className="links">
                      Country with best education system?
                    </Link>
                    <Link to="/" className="links">
                      How to choose the right country?
                    </Link>
                    </div>
                   
                  </div>
                  <div className="rightdrop1">
                    <div className="d">
                    <Link className="links">
                 <p> USA  </p>   
                      </Link>
<Link to="/" className="links ">
Beginner Guide
                      </Link>
                      <Link to="/" className="links">
                      Visa Guide
                      </Link>
                      <Link to="/" className="links">
                      Living in USA
                      </Link>
                      <Link to="/" className="links">
                      Average living costs
                      </Link>
                      <Link to="/" className="links">
                      Popular job sectors
                      </Link>
                      <Link to="/" className="links">
                      Post study work
                      </Link>
                      <Link to="/" className="links">
                      Explore
                      </Link>
                      <Link to="/" className="links">
                      Universities in USA
                      </Link>
                      <Link to="/" className="links">
                      Study in USA
                      </Link>


                    </div>
                    <div className="d"> <Link className="links">
                 <p> Canada  </p>   
                      </Link>
<Link to="/" className="links">
Beginner Guide
                      </Link>
                      <Link to="/" className="links">
                      Visa Guide
                      </Link>
                      <Link to="/" className="links">
                      Living in USA
                      </Link>
                      <Link to="/" className="links">
                      Average living costs
                      </Link>
                      <Link to="/" className="links">
                      Popular job sectors
                      </Link>
                      <Link to="/" className="links">
                      Post study work
                      </Link>
                      <Link to="/" className="links">
                      Explore
                      </Link>
                      <Link to="/" className="links">
                      Universities in USA
                      </Link>
                      <Link to="/" className="links">
                      Study in USA
                      </Link></div>
                    <div className="d"> <Link className="links">
                 <p> Italy  </p>   
                      </Link>
<Link to="/" className="links">
Beginner Guide
                      </Link>
                      <Link to="/" className="links">
                      Visa Guide
                      </Link>
                      <Link to="/" className="links">
                      Living in USA
                      </Link>
                      <Link to="/" className="links">
                      Average living costs
                      </Link>
                      <Link to="/" className="links">
                      Popular job sectors
                      </Link>
                      <Link to="/" className="links">
                      Post study work
                      </Link>
                      <Link to="/" className="links">
                      Explore
                      </Link>
                      <Link to="/" className="links">
                      Universities in USA
                      </Link>
                      <Link to="/" className="links">
                      Study in USA
                      </Link></div>
                    <div className="d"> <Link className="links">
                 <p> Other Countries  </p>   
                      </Link>
<Link to="/" className="links">
Beginner Guide
                      </Link>
                      <Link to="/" className="links">
                      Visa Guide
                      </Link>
                      <Link to="/" className="links">
                      Living in USA
                      </Link>
                      <Link to="/" className="links">
                      Average living costs
                      </Link>
                      <Link to="/" className="links">
                      Popular job sectors
                      </Link>
                      <Link to="/" className="links">
                      Post study work
                      </Link>
                      <Link to="/" className="links">
                      Explore
                      </Link>
                      <Link to="/" className="links">
                      Universities in USA
                      </Link>
                      <Link to="/" className="links">
                      Study in USA
                      </Link></div>
                  </div>
                </div>
              )}
            </button>
           </div>
        </div>
      </div>
    </>
  );
};
export default Dropdowns;

/*<div className="rightside">
          <div className="authbar">
            <Link to="/" className="authlogin">
              LogIn
            </Link>
            <h2>/</h2>
            <Link to="/" className="authsignup">
              SignUp
            </Link>
          </div>
        </div>
        */
