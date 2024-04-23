import React from "react";
import AdminHeader from "./AdminHeader.js";
import AdminSidebar from "./AdminSidebar.js";
import AdminFooter from "./AdminFooter.js";
import CKEditor from "./MyEditor";

import { useState } from "react";

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
  insert_news_data,
} from "../../ServiceConnection/serviceconnection.js";

const AddNews = () => {
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);

  const [AddNewsData, setAddNewsData] = useState([]);
  const [error_show, seterror_show] = useState("");
  const [editorDataMainID, setEditorDatMainID] = useState("0");
  const [editorData, setEditorData] = useState("");
  const [dynaicimage, setDynaicimage] = useState(null);

  const handleSaveChangesdynamic = async (form_data, insert_news_data) => {
    let vaild_data = check_vaild_save(form_data);
    seterror_show("");

    if (vaild_data) {
      setshowLoaderAdmin(true);
      let fd_from = combiled_form_data(form_data, null);

      fd_from.append("main_id", editorDataMainID);
      await server_post_data(insert_news_data, fd_from)
        .then((Response) => {
          console.log(Response);
          setshowLoaderAdmin(false);
          if (Response.data.error) {
            handleError(Response.data.message);
          } else {
            handleSuccessSession(Response.data.message, "/admin_news");
          }
        })
        .catch((error) => {
          console.log(error);
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

  console.log(AddNewsData);
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
                  <h5 className="card-title">Add News</h5>
                  <form className="needs-validation" id="CarrerformData">
                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">PDFs</label>
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
                    </div>

                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">
                          Title<span className="red_show">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control  trio_mandatory"
                          name="news_name"
                          id="news_name"
                          maxLength={1000}
                          onInput={handleIaphabetnumberChange}
                          placeholder="Enter Introduction"
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
                            insert_news_data
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

export default AddNews;
