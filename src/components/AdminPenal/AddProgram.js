import React from "react";
import { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader.js";
import AdminSidebar from "./AdminSidebar.js";
import AdminFooter from "./AdminFooter.js";
import {
  handleError,
  handleSuccessSession,
  check_vaild_save,
  combiled_form_data,
  handleAphabetsChange,
} from "../../Common jquery/CommonJquery.js";
import { Link } from "react-router-dom";
import {
  insert_program_data,
  server_post_data,
} from "../../ServiceConnection/serviceconnection.js";
import { retrieveData } from "../../LocalConnection/LocalConnection.js";

const AddProgram = () => {
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);

  const retrievedAdminId = retrieveData("staff_id");

  const [error_show, seterror_show] = useState("");
  const [editorDataMainID, setEditorDatMainID] = useState("0");

  const handleSaveChangesdynamic = async (form_data, url_for_save) => {
    let vaild_data = check_vaild_save(form_data);
    if (vaild_data) {
      setshowLoaderAdmin(true);
      let fd_from = combiled_form_data(form_data);
      fd_from.append("admin_id", retrievedAdminId);

      await server_post_data(url_for_save, fd_from)
        .then((Response) => {
          console.log(Response.data.message);
          setshowLoaderAdmin(false);
          if (Response.data.error) {
            handleError(Response.data.message);
          } else {
            handleSuccessSession(Response.data.message, "/admin_programe");
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
                      Website Management &gt; important link
                      <div className="page-title-subheading">
                        Add important links
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-card mb-3 card">
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <form className="needs-validation" id="advisoryform">
                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">
                          Possition<span className="red_show">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control  trio_mandatory"
                          name="responsibility"
                          id="responsibility"
                          maxLength={100}
                          onInput={handleAphabetsChange}
                          placeholder="Enter Title"
                        />
                        <span className="condition_error"></span>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">
                          Organisation <span className="red_show">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control  trio_mandatory"
                          name="organisation_name"
                          id="organisation_name"
                          maxLength={100}
                          onInput={handleAphabetsChange}
                          placeholder="Enter Title"
                        />
                        <span className="condition_error"></span>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">
                          Role<span className="red_show">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control  trio_mandatory"
                          name="role"
                          id="role"
                          maxLength={100}
                          onInput={handleAphabetsChange}
                          placeholder="Enter Title"
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
                            "advisoryform",
                            insert_program_data
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

export default AddProgram;
