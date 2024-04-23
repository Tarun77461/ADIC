import React from "react";
import AdminHeader from "./AdminHeader.js";
import AdminSidebar from "./AdminSidebar.js";
import AdminFooter from "./AdminFooter.js";

import { useState, useEffect } from "react";
import CKEditor from "./MyEditor";

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
  Edit_get_faculty_deatails,
  update_faculti_details,
} from "../../ServiceConnection/serviceconnection.js";
import { retrieveData } from "../../LocalConnection/LocalConnection.js";

import { useParams } from "react-router-dom";

const Editfaculty = () => {
  let { id } = useParams();
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);

  const [editFacultiDeatails, seteditFacultiDeatails] = useState([]);

  const [dynaicimage, setDynaicimage] = useState(null);

  useEffect(() => {
    const start_date = "";
    const end_date = "";
    const flag = "3";
    const call_id = id;
    master_data_get(start_date, end_date, flag, call_id);
  }, []);
  const master_data_get = async (start_date, end_date, flag, call_id) => {
    setshowLoaderAdmin(true);
    const fd = new FormData();

    fd.append("flag", flag);
    fd.append("primary_id", call_id);
    console.log(call_id);

    await server_post_data(Edit_get_faculty_deatails, fd)
      .then((Response) => {
        if (Response.data.error) {
          handleError(Response.data.message);
        } else {
          seteditFacultiDeatails(Response.data.message[0]);
          console.log(Response.data.message);
        }
        setshowLoaderAdmin(false);
      })
      .catch((error) => {
        setshowLoaderAdmin(false);
      });
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

  const handleSaveChangesdynamic = async (formData, urlForSave) => {
    const validData = check_vaild_save(formData);

    if (validData) {
      setshowLoaderAdmin(true);
      const compiledFormData = combiled_form_data(formData, null);
      console.log(compiledFormData);
      compiledFormData.append("primary_id", id);
      console.log(id);
      try {
        const response = await server_post_data(urlForSave, compiledFormData);
        setshowLoaderAdmin(false);

        if (response.data.error) {
          alert(response.data.message);
        } else {
          const responseData = response.data.user_data;
          handleSuccessSession(response.data.message, "/admin_faculty");
          console.log(responseData);
        }
      } catch (error) {
        setshowLoaderAdmin(false);
      }
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
                      Website Management &gt; Facultie Deatails
                      <div className="page-title-subheading">
                        Edit Facultie Deatails
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-card mb-3 card">
                <div className="card-body">
                  <h5 className="card-title">Edit Facultie Deatails</h5>
                  <form className="needs-validation" id="CarrerformData">
                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">
                          Name<span className="red_show">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control  trio_mandatory"
                          name="name_faculty"
                          id="name_faculty"
                          maxLength={100}
                          // onInput={handleAphabetsChange}
                          placeholder="Enter Title"
                          defaultValue={editFacultiDeatails.name_faculty || ""}
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
                          name="education"
                          id="education"
                          maxLength={100}
                          // onInput={handleAphabetsChange}
                          placeholder="Enter Title"
                          defaultValue={editFacultiDeatails.education || ""}
                        />
                        <span className="condition_error"></span>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">
                          Designation<span className="red_show">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control  trio_mandatory"
                          name="responsibility"
                          id="responsibility"
                          maxLength={100}
                          // onInput={handleAphabetsChange}
                          placeholder="Enter Title"
                          defaultValue={
                            editFacultiDeatails.responsibility || ""
                          }
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
                          id="Image_url"
                          type="file"
                          name="Image_url"
                          onChange={handleFileChangedynamic("event_image_name")}
                          accept=".jpg,.jpeg,.png"
                          defaultValue={
                            editFacultiDeatails.Image_url_show || ""
                          }
                        />
                        <div className="previewEditBox">
                          {dynaicimage && dynaicimage.Image_url_show && (
                            <img
                              src={dynaicimage.Image_url_show}
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
                            "CarrerformData",
                            update_faculti_details
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

export default Editfaculty;
