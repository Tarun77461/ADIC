import React from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";

function AdminHome() {
  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-header">
        <AdminHeader />

        <div className="app-main">
          <AdminSidebar />
          <div className="hmm">content</div>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
}
export default AdminHome;
