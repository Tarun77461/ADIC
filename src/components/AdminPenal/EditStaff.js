import React from "react";
import AdminHeader from "./AdminHeader.js";
import AdminSidebar from "./AdminSidebar.js";
import AdminFooter from "./AdminFooter.js";
import CKEditor from "./MyEditor";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import {
  check_vaild_save,
  combiled_form_data,
  handleIaphabetnumberChange,
  handleError,
  handleSuccessSession,
} from "../../Common jquery/CommonJquery.js";
import {
  server_post_data,
  update_adminStaff_data,
  Edit_get_staff_data,
} from "../../ServiceConnection/serviceconnection.js";

import { useParams } from "react-router-dom";

const EditStaff = () => {
  let { id } = useParams();
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);

  const [AddNewsData, setAddNewsData] = useState([]);

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

    await server_post_data(Edit_get_staff_data, fd)
      .then((Response) => {
        if (Response.data.error) {
          handleError(Response.data.message);
        } else {
          setAddNewsData(Response.data.message[0]);
          console.log(Response.data.message);
        }
        setshowLoaderAdmin(false);
      })
      .catch((error) => {
        setshowLoaderAdmin(false);
      });
  };

  const handleSaveChangesdynamic = async (formData, urlForSave) => {
    const validData = check_vaild_save(formData);

    if (validData) {
      setshowLoaderAdmin(true);
      const compiledFormData = combiled_form_data(formData, null);
      console.log(compiledFormData);
      compiledFormData.append("primary_id", id);

      try {
        const response = await server_post_data(urlForSave, compiledFormData);
        setshowLoaderAdmin(false);
        console.log(response.data);

        if (response.data.error) {
          alert(response.data.message);
        } else {
          const responseData = response.data.user_data;
          handleSuccessSession(response.data.message, "/admin_staff");
          console.log(responseData);
        }
      } catch (error) {
        setshowLoaderAdmin(false);
        console.error(error);
      }
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
                      Website Management &gt; staff
                      <div className="page-title-subheading">
                        Add and Edit staff
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-card mb-3 card">
                <div className="card-body">
                  <h5 className="card-title">Add staff</h5>
                  <form className="needs-validation" id="stafffacultyformData">
                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">Images</label>
                        <br></br>
                        <input
                          className="inputEditFile"
                          id="Image_url"
                          type="file"
                          name="Image_url"
                          onChange={handleFileChangedynamic("Image_url")}
                          accept=".jpg,.jpeg,.png"
                          defaultValue={AddNewsData.Image_url_show || ""}
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

                    <th className="text-center">Action</th>
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
                          maxLength={1000}
                          onInput={handleIaphabetnumberChange}
                          placeholder="Enter Introduction"
                          defaultValue={AddNewsData.name || ""}
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
                          name="responsibility"
                          id="responsibility"
                          maxLength={1000}
                          onInput={handleIaphabetnumberChange}
                          placeholder="Enter Introduction"
                          defaultValue={AddNewsData.responsibility || ""}
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
                            "stafffacultyformData",
                            update_adminStaff_data
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

export default EditStaff;
