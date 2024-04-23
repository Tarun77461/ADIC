import React from "react";
import AdminHeader from "./AdminHeader.js";
import AdminSidebar from "./AdminSidebar.js";
import AdminFooter from "./AdminFooter.js";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import {
  check_vaild_save,
  combiled_form_data,
  handleAphabetsChange,
  handleIaphabetnumberChange,
  handleError,
  handleSuccessSession,
} from "../../Common jquery/CommonJquery.js";
import {
  server_post_data,
  insert_GuestFaculity_data,
} from "../../ServiceConnection/serviceconnection.js";
import { retrieveData } from "../../LocalConnection/LocalConnection.js";

const GuestFacultyAdd = () => {
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);

  const retrievedAdminId = retrieveData("staff_id");
  const [editStaffData, seteditStaffData] = useState([]);
  const [error_show, seterror_show] = useState("");
  const [editorDataMainID, setEditorDatMainID] = useState("0");
  const [editorData, setEditorData] = useState("");

  const handleSaveChangesdynamic = async (
    form_data,
    insert_GuestFaculity_data
  ) => {
    let vaild_data = check_vaild_save(form_data);
    seterror_show("");

    if (vaild_data) {
      setshowLoaderAdmin(true);
      let fd_from = combiled_form_data(form_data, null);
      fd_from.append("admin_id", retrievedAdminId);
      fd_from.append("main_id", editorDataMainID);
      await server_post_data(insert_GuestFaculity_data, fd_from)
        .then((Response) => {
          setshowLoaderAdmin(false);
          if (Response.data.error) {
            handleError(Response.data.message);
          } else {
            handleSuccessSession(
              Response.data.message,
              "/Admin_guest_facuilty"
            );
          }
        })
        .catch((error) => {
          setshowLoaderAdmin(false);
        });
    }
  };

  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-header">
        <div className={showLoaderAdmin ? "loading_website" : ""}></div>
        <AdminHeader />

        <div className="app-main">
          <AdminSidebar />
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="app-page-title">
                <div className="page-title-wrapper">
                  <div className="page-title-heading">
                    <Link to="/admindashboard">
                      <div className="page-title-icon">
                        <i className="fa fa-home icon-gradient bg-mean-fruit"></i>
                      </div>
                    </Link>
                    <div>
                      Website Management &gt; Blogs
                      <div className="page-title-subheading">
                        Add and Edit Blog
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-card mb-3 card">
                <div className="card-body">
                  <h5 className="card-title">Add/Edit Blog</h5>
                  <form className="needs-validation" id="CarrerformData">
                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">
                          Name<span className="red_show">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control  trio_mandatory"
                          name="name"
                          id="name"
                          maxLength={100}
                          // onInput={handleAphabetsChange}
                          placeholder="Enter Title"
                          value={editStaffData.name}
                        />
                        <span className="condition_error"></span>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">
                          Qualification<span className="red_show">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control  trio_mandatory"
                          name="qualification"
                          id="qualification"
                          maxLength={300}
                          // onInput={handleIaphabetnumberChange}
                          placeholder="Enter Introduction"
                          value={editStaffData.qualification}
                        />
                        <span className="condition_error"></span>
                      </div>
                    </div>
                    <div className="submitbtn">
                      {" "}
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() =>
                          handleSaveChangesdynamic(
                            "CarrerformData",
                            insert_GuestFaculity_data
                          )
                        }
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <AdminFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestFacultyAdd;
