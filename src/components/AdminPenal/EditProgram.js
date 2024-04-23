import React from "react";
import { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader.js";
import AdminSidebar from "./AdminSidebar.js";
import AdminFooter from "./AdminFooter.js";
import { useParams } from "react-router-dom";
import {
  handleError,
  handleSuccessSession,
  check_vaild_save,
  combiled_form_data,
  handleAphabetsChange,
} from "../../Common jquery/CommonJquery.js";
import { Link } from "react-router-dom";
import {
  update_programme,
  server_post_data,
  Edit_get_programe_addvisory,
} from "../../ServiceConnection/serviceconnection.js";

const EditProgram = () => {
  let { id } = useParams();
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);
  const [editProgramData, seteditProgramData] = useState([]);
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

    await server_post_data(Edit_get_programe_addvisory, fd)
      .then((Response) => {
        if (Response.data.error) {
          handleError(Response.data.message);
        } else {
          seteditProgramData(Response.data.message[0]);
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
      console.log(id);
      try {
        const response = await server_post_data(urlForSave, compiledFormData);
        setshowLoaderAdmin(false);
        console.log(response.data);

        if (response.data.error) {
          alert(response.data.message);
        } else {
          const responseData = response.data.user_data;
          handleSuccessSession(response.data.message, "/admin_programe");
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
  console.log(editProgramData);
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
                  <h5 className="card-title">Edit RTI</h5>
                  <form className="needs-validation" id="updateProgramm">
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
                          defaultValue={editProgramData.responsibility || ""}
                        />
                        <span className="condition_error"></span>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="validationCustom01">
                          Organisation<span className="red_show">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control  trio_mandatory"
                          name="organisation_name"
                          id="organisation_name"
                          maxLength={100}
                          onInput={handleAphabetsChange}
                          placeholder="Enter Title"
                          defaultValue={editProgramData.organisation_name || ""}
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
                          defaultValue={editProgramData.role || ""}
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
                          id="primary_id"
                          type="file"
                          name="ImpImageLink"
                          onChange={handleFileChangedynamic("ImpImageLink")}
                          accept=".jpg,.jpeg,.png"
                          defaultValue={editProgramData.ImpImageLink || ""}
                        />
                        <div className="previewEditBox">
                          {dynaicimage && dynaicimage.ImpImageLink && (
                            <img
                              src={dynaicimage.ImpImageLink}
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
                            "updateProgramm",
                            update_programme
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

export default EditProgram;
