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
  get_gravidational,
  update_graviditional_data,
} from "../../ServiceConnection/serviceconnection.js";
import { retrieveData } from "../../LocalConnection/LocalConnection.js";
import { useParams } from "react-router-dom";

const UpdateGraviditional = () => {
  let { id } = useParams();
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);
  const [editGravitionalData, seteditGravitionalData] = useState([]);

  const retrievedAdminId = retrieveData("staff_id");
  const [dynaicimage, setDynaicimage] = useState(null);
  useEffect(() => {
    const flag = "1";
    const call_id = "0";
    master_data_get(flag, call_id);
  }, []);

  const master_data_get = async (start_date, end_date, flag, call_id) => {
    setshowLoaderAdmin(true);
    const fd = new FormData();
    fd.append("admin_id", retrievedAdminId);
    fd.append("flag", flag);
    fd.append("call_id", call_id);
    await server_post_data(get_gravidational, fd)
      .then((Response) => {
        console.log(Response);
        if (Response.data.error) {
          handleError(Response.data.message);
        } else {
          console.log(Response.data.message[0]);
          seteditGravitionalData(Response.data.message[0]);
          //   setEditorDatMainID(Response.data.message[0]);`
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
      console.log(id);
      try {
        const response = await server_post_data(urlForSave, compiledFormData);
        setshowLoaderAdmin(false);
        console.log(response.data);

        if (response.data.error) {
          alert(response.data.message);
        } else {
          const responseData = response.data.user_data;
          handleSuccessSession(response.data.message, "/admin_graviditional");
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
                      Website Management &gt; News
                      <div className="page-title-subheading">
                        Add and Edit Blog
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-card mb-3 card">
                <div className="card-body">
                  <h5 className="card-title">Edit News</h5>
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
                          onInput={handleAphabetsChange}
                          placeholder="Enter Title"
                          defaultValue={editGravitionalData.title || ""}
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
                          id="ImpImageLink"
                          type="file"
                          name="ImpImageLink"
                          onChange={handleFileChangedynamic("event_image_name")}
                          accept=".pdf"
                          defaultValue={editGravitionalData.ImpImageLink || ""}
                        />
                        <div className="previewEditBox">
                          {dynaicimage && dynaicimage.ImpImageLink_show && (
                            <img
                              src={dynaicimage.ImpImageLink_show}
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
                            update_graviditional_data
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

export default UpdateGraviditional;
