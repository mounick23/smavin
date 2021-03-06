import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSubs } from "../../functions/sub";
import "./Caty.css";

const SubList = () => {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSubs().then((res) => {
      setSubs(res.data);
      setLoading(false);
    });
  }, []);

  const showSubs = () =>
    subs.map((s) => (
      <Link
        key={s._id}
        className="col btn btn-outlined-primary btn-lg btn-block btn-raised m-3"
        to={`/sub/${s.slug}`}
      >
        <div className="cyl"> {s.name}</div>
      </Link>
    ));

  return (
    <div className="container">
      <div className="row">
        {loading ? <h4 className="text-center">Loading...</h4> : showSubs()}
      </div>
    </div>
  );
};

export default SubList;
