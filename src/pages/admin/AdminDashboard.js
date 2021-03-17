import React from "react";
import AdminNav from "../../components/nav/AdminNav";
import "../Home.css"

const AdminDashboard = () => {
  return (
    <div className="f container-fluid mx-auto ">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col">
          <h4>Admin Dashboard</h4>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
