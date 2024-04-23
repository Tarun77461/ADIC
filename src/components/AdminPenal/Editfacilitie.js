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
  Edit_get_facility,
  update_facilitie_data,
} from "../../ServiceConnection/serviceconnection.js";
import { retrieveData } from "../../LocalConnection/LocalConnection.js";
import { error } from "jquery";
import { useParams } from "react-router-dom";

const Editfacilitie = () => {
  let { id } = useParams();
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);

  const retrievedAdminId = retrieveData("staff_id");
  const [editFacilitieData, seteditFacilitieData] = useState([]);

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
    await server_post_data(Edit_get_facility, fd)
      .then((Response) => {
        if (Response.data.error) {
          handleError(Response.data.message);
        } else {
          console.log(Response.data.message[0]);
          seteditFacilitieData(Response.data.message[0]);
        }

        setshowLoaderAdmin(false);
      })
      .catch((error) => {
        setshowLoaderAdmin(false);
      });
  };

  // const handleFileChangedynamic = (keyname) => (event) => {
  //   const file = event.target.files[0];

  //   let new_file_name = keyname + "_show";

  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       setDynaicimage((prevImages) => ({
  //         ...prevImages,
  //         [keyname]: file,
  //         [new_file_name]: reader.result,
  //       }));
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     setDynaicimage((prevImages) => ({
  //       ...prevImages,
  //       [keyname]: null,
  //       [new_file_name]: null,
  //     }));
  //   }
  // };
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
        console.log(response.data);

        if (response.data.error) {
          alert(response.data.message);
        } else {
          const responseData = response.data.user_data;
          handleSuccessSession(response.data.message, "/admin_facility");
          console.log(responseData);
        }
      } catch (error) {
        setshowLoaderAdmin(false);
        console.error(error);
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
                      Website Management &gt; Facilitie
                      <div className="page-title-subheading">
                        Edit Facilitie
                      </div>
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
                          defaultValue={editFacilitieData.title || ""}
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
                          defaultValue={editFacilitieData.description || ""}
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
                          id="Image_url"
                          type="file"
                          name="Image_url"
                          onChange={handleFileChangedynamic("event_image_name")}
                          accept=".jpg,.jpeg,.png"
                          defaultValue={editFacilitieData.Image_url || ""}
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
                            update_facilitie_data
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

export default Editfacilitie;
