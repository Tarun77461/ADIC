import React from "react";
import { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import {
  handleError,
  combiled_form_data,
  check_vaild_save,
} from "../../Common jquery/CommonJquery.js";
import {
  server_post_data,
  get_all_social_links,
  update_social_data,
} from "../../ServiceConnection/serviceconnection.js";
import { retrieveData } from "../../LocalConnection/LocalConnection.js";

function WebsiteInfo() {
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);
  const retrievedAdminId = retrieveData("staff_id");

  const [formData, setFormData] = useState({});

  useEffect(() => {
    const flag = "1";
    const call_id = "0";
    master_data_get(flag, call_id);
  }, []);
  const master_data_get = async (flag, call_id) => {
    setshowLoaderAdmin(true);
    const fd = new FormData();

    fd.append("flag", flag);
    fd.append("call_id", call_id);
    await server_post_data(get_all_social_links, fd)
      .then((Response) => {
        console.log(Response.data.message);
        if (Response.data.error) {
          handleError(Response.data.message);
        } else {
          // setsBlogData(Response.data.message[0]);

          setFormData(Response.data.message[0]);
        }

        setshowLoaderAdmin(false);
      })
      .catch((error) => {
        console.log(error);
        setshowLoaderAdmin(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveChangesdynamic = async (formData, urlForSave) => {
    const validData = check_vaild_save(formData);

    if (validData) {
      setshowLoaderAdmin(true);
      const compiledFormData = combiled_form_data(formData, null);
      console.log(compiledFormData);
      compiledFormData.append("primary_id", retrievedAdminId);
      try {
        const response = await server_post_data(urlForSave, compiledFormData);
        setshowLoaderAdmin(false);
        console.log(response.data);

        if (response.data.error) {
          alert(response.data.message);
        } else {
          const responseData = response.data.user_data;
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
          <div className="container mt-4">
            <form id="formdata_click">
              <div className="adEdittxt">
                {" "}
                <h1>Add/Edit Website Information</h1>
              </div>
              <div className="row">
                {" "}
                <div className="col">
                  <div className="form-group">
                    <label>Website header label*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      defaultValue={formData.title || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Email Address*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      defaultValue={formData.email || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label>Website Contact Number*</label>
                    <input
                      type="tel"
                      id="contactno"
                      className="form-control"
                      name="contactno"
                      defaultValue={formData.contactno || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Website Alternate Contact Number*</label>
                    <input
                      type="tel"
                      id="alterno"
                      className="form-control"
                      name="alterno"
                      defaultValue={formData.alterno || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Website Address*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      defaultValue={formData.address || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Social media links */}
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label>Facebook (Only paste)*</label>
                    <input
                      id="Facebookname"
                      type="url"
                      className="form-control"
                      name="Facebookname"
                      defaultValue={formData.Facebookname || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Instagram (Only paste)*</label>
                    <input
                      id="Instagramname"
                      type="url"
                      className="form-control"
                      name="Instagramname"
                      defaultValue={formData.Instagramname || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Linkdin (Only paste)*</label>
                    <input
                      id="LinkedInname"
                      type="url"
                      className="form-control"
                      name="LinkedInname"
                      defaultValue={formData.LinkedInname || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label>Youtube (Only paste)*</label>
                    <input
                      type="url"
                      id="Youtubename"
                      className="form-control"
                      name="Youtubename"
                      defaultValue={formData.Youtubename || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>whatsapp*</label>
                    <input
                      id="Whatsappname"
                      type="url"
                      className="form-control"
                      name="Whatsappname"
                      defaultValue={formData.Whatsappname || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Twitter*</label>
                    <input
                      id="Twittername"
                      type="url"
                      className="form-control"
                      name="Twittername"
                      defaultValue={formData.Twittername || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label>Koo*</label>
                    <input
                      id="kooname"
                      type="url"
                      className="form-control"
                      name="kooname"
                      defaultValue={formData.kooname || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="submitbtn">
                {" "}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    handleSaveChangesdynamic(
                      "formdata_click",
                      update_social_data
                    )
                  }
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
}
export default WebsiteInfo;
