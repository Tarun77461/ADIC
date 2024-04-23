import React from "react";
import AdminHeader from "./AdminHeader.js";
import AdminSidebar from "./AdminSidebar.js";
import AdminFooter from "./AdminFooter.js";

import { useState } from "react";

import { Link } from "react-router-dom";
import {
  check_vaild_save,
  combiled_form_data,
  handleAphabetsChange,
  handleError,
  handleSuccessSession,
} from "../../Common jquery/CommonJquery.js";
import {
  server_post_data,
  insert_facilitie_data,
} from "../../ServiceConnection/serviceconnection.js";
import { retrieveData } from "../../LocalConnection/LocalConnection.js";

const Addfacilitie = () => {
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);

  const retrievedAdminId = retrieveData("staff_id");

  const [error_show, seterror_show] = useState("");
  const [editorDataMainID, setEditorDatMainID] = useState("0");

  const [dynaicimage, setDynaicimage] = useState(null);

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

  const handleSaveChangesdynamic = async (form_data, UpdateNews) => {
    let vaild_data = check_vaild_save(form_data);
    seterror_show("");

    if (vaild_data) {
      setshowLoaderAdmin(true);
      let fd_from = combiled_form_data(form_data, null);
      console.log(form_data);
      fd_from.append("admin_id", retrievedAdminId);
      //   fd_from.append("main_id", editorDataMainID);
      await server_post_data(UpdateNews, fd_from)
        .then((Response) => {
          setshowLoaderAdmin(false);
          if (Response.data.error) {
            handleError(Response.data.message);
          } else {
            handleSuccessSession(Response.data.message, "/admin_facility");
          }
        })
        .catch((error) => {
          console.log(error);
          setshowLoaderAdmin(false);
        });
    }
    console.log(FormData);
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
                      Website Management &gt; Add
                      <div className="page-title-subheading">Add Facilitie</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-card mb-3 card">
                <div className="card-body">
                  <h5 className="card-title">Edit facilitie</h5>
                  <form className="needs-validation" id="CarrerformData">
                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">
                          Description<span className="red_show">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control  trio_mandatory"
                          name="title"
                          id="title"
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
                          Description<span className="red_show">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control  trio_mandatory"
                          name="description"
                          id="description"
                          maxLength={100}
                          onInput={handleAphabetsChange}
                          placeholder="Enter Title"
                        />
                        <span className="condition_error"></span>
                      </div>
                    </div>
                    {/* <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">Images</label>
                        <br></br>
                        <input
                          className="inputEditFile"
                          id="Img_url"
                          type="file"
                          name="Img_url"
                          onChange={handleFileChangedynamic("event_image_name")}
                          accept=".jpg,.jpeg,.png"
                        />
                        <div className="previewEditBox">
                          {dynaicimage && dynaicimage.event_image_name_show && (
                            <img
                              src={dynaicimage.event_image_name_show}
                              alt="Preview"
                              className="imgEditMaster"
                            />
                          )}
                        </div>
                        <span className="condition_error"></span>
                      </div>
                    </div> */}
                    <div className="submitbtn">
                      {" "}
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() =>
                          handleSaveChangesdynamic(
                            "CarrerformData",
                            insert_facilitie_data
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

export default Addfacilitie;
