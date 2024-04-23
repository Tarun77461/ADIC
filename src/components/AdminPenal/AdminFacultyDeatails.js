import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import {
  handleError,
  formatDateString,
  handleSuccess,
} from "../../Common jquery/CommonJquery.js";

import {
  server_post_data,
  get_faculty_deatails,
  delete_facultie,
  APL_LINK,
} from "../../ServiceConnection/serviceconnection.js";

import { Link } from "react-router-dom";
// import { retrieveData } from "../../LocalConnection/LocalConnection.js";

const AdminFacultyDetails = () => {
  const [facultyList, setFacultyList] = useState([]);
  // const retrievedAdminId = retrieveData("staff_id");
  const [BlogImageLinkData, setsBlogImageLinkData] = useState("");

  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);

  useEffect(() => {
    const flag = "1";
    const call_id = "0";
    master_data_get(flag, call_id);
  }, []);

  const master_data_get = async (start_date, end_date, flag, call_id) => {
    setshowLoaderAdmin(true);
    const fd = new FormData();
    fd.append("flag", flag);
    fd.append("call_id", call_id);

    await server_post_data(get_faculty_deatails, fd)
      .then((Response) => {
        // console.log(Response.data);

        if (Response.data.error) {
          handleError(Response.data.message);
        } else {
          setFacultyList(Response.data.message);
          setsBlogImageLinkData(Response.data.image_path);
        }

        setshowLoaderAdmin(false);
      })
      .catch((error) => {
        setshowLoaderAdmin(false);
      });
  };

  const master_data_action = async (call_id, flag) => {
    try {
      setshowLoaderAdmin(true);

      const fd = new FormData();

      fd.append("pk", call_id);
      fd.append("flag_for", flag);

      console.log(call_id);

      const response = await server_post_data(delete_facultie, fd);

      setshowLoaderAdmin(false);

      if (response.data.error) {
        handleError(response.data.message);
      } else {
        handleSuccess(response.data.message);
      }
    } catch (error) {
      setshowLoaderAdmin(false);
      console.error("Error occurred:", error);
    }
  };

  const handleLinkClick = (link, blank = "") => {
    // Reload the page when the link is clicked
    if (blank === "") {
      window.location.href = link;
    } else {
      window.open(link, blank);
    }
  };

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-header">
      <AdminHeader />
      <div className="app-main">
        <AdminSidebar />
        <div className="container mt-5">
          <div className="AddROwaddtxt">
            <div className="addRowbtn">
              <div className="page-title-actions add_funtion_call">
                <Link onClick={() => handleLinkClick("/add_faculty")}>
                  <button
                    type="button"
                    className="btn-shadow mr-3 btn btn-dark"
                  >
                    <i className="fa fa-plus">&nbsp; Add Faculty</i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="adEdittxt">
              <h1>Add Faculty</h1>
            </div>
          </div>
          <div className="table-responsive">
            <table
              className="align-middle mb-0 table table-borderless table-striped table-hover"
              id="dynamic-table1"
            >
              <thead>
                <tr>
                  <th className="text-center">S.No</th>

                  <th className="text-center">Entry Date</th>

                  <th className="text-center">Name</th>
                  <th className="text-center">Images</th>

                  <th className="text-center">Qualification</th>
                  <th className="text-center">Designation</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {!facultyList
                  ? {}
                  : facultyList.map((person, index) => (
                      <tr key={index}>
                        <td className="text-center text-muted">{index + 1}</td>

                        <td className="text-center">
                          {formatDateString(person.entry_date)}
                        </td>

                        <td className="text-center">{person.name_faculty}</td>
                        <td className="text-center">
                          <img
                            className="width_height_50px"
                            src={
                              APL_LINK + BlogImageLinkData + person.Image_url
                            }
                            alt={person.Image_url}
                          ></img>
                        </td>
                        <td className="text-center">{person.education}</td>
                        <td className="text-center">{person.responsibility}</td>

                        <td className="text-center">
                          <div class="dltsvBtn ">
                            <Link
                              onClick={() =>
                                handleLinkClick(
                                  "/edit_faculty/" + person.primary_id
                                )
                              }
                            >
                              <button
                                type="button"
                                tabIndex="0"
                                className="dropdown-item"
                              >
                                Edit
                              </button>
                            </Link>
                            <Link
                              onClick={() =>
                                master_data_action(person.primary_id)
                              }
                            >
                              <button
                                type="button"
                                tabIndex="0"
                                className="dropdown-item"
                              >
                                Delete
                              </button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AdminFooter />
    </div>
  );
};

export default AdminFacultyDetails;
