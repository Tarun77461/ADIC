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
  server_post_data,
  insert_Syllabus_data,
} from "../../ServiceConnection/serviceconnection.js";
import { retrieveData } from "../../LocalConnection/LocalConnection.js";

const ADDSyllabus = () => {
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);
  const [editGravitionalData, seteditGravitionalData] = useState([]);

  const retrievedAdminId = retrieveData("staff_id");
  const [dynaicimage, setDynaicimage] = useState(null);

  const handleSaveChangesdynamic = async (form_data, url_for_save) => {
    let vaild_data = check_vaild_save(form_data);
    if (vaild_data) {
      setshowLoaderAdmin(true);
      let fd_from = combiled_form_data(form_data, dynaicimage);
      fd_from.append("admin_id", retrievedAdminId);

      await server_post_data(url_for_save, fd_from)
        .then((Response) => {
          console.log(Response.data.message);
          setshowLoaderAdmin(false);
          if (Response.data.error) {
            handleError(Response.data.message);
          } else {
            handleSuccessSession(Response.data.message, "/admin_syllabus");
          }
        })
        .catch((error) => {
          setshowLoaderAdmin(false);
        });
    }
  };

  const handleFileChangedynamic = (keyname) => (event) => {
    const file = event.target.files[0];

    let new_file_name = keyname + "_show";

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setDynaicimage((prevImages) => ({
          ...prevImages,
          [keyname]: file,
          [new_file_name]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setDynaicimage((prevImages) => ({
        ...prevImages,
        [keyname]: null,
        [new_file_name]: null,
      }));
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
                      Website Management &gt; Syllabus
                      <div className="page-title-subheading">Add Syllabus</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-card mb-3 card">
                <div className="card-body">
                  <h5 className="card-title">ADD News</h5>
                  <form className="needs-validation" id="UpateGraviditional">
                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">
                          Title<span className="red_show">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control  trio_mandatory"
                          name="title"
                          id="title"
                          maxLength={100}
                          // onInput={handleAphabetsChange}
                          placeholder="Enter Title"
                        />
                        <span className="condition_error"></span>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">Images</label>
                        <br></br>
                        <input
                          className="inputEditFile"
                          id="pdf_url"
                          type="file"
                          name="pdf_url"
                          onChange={handleFileChangedynamic("pdf_url")}
                          accept=".pdf"
                        />
                        <div className="previewEditBox">
                          {dynaicimage && dynaicimage.pdf_url && (
                            <img
                              src={dynaicimage.pdf_url}
                              alt="Preview"
                              className="imgEditMaster"
                            />
                          )}
                        </div>
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
                            "UpateGraviditional",
                            insert_Syllabus_data
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

export default ADDSyllabus;
