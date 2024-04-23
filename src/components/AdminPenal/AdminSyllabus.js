import React from "react";

import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import { useEffect, useState } from "react";
import {
  handleError,
  formatDateString,
  handleSuccess,
} from "../../Common jquery/CommonJquery.js";

import {
  server_post_data,
  get_syllabus,
  delete_syllabus,
  APL_LINK,
} from "../../ServiceConnection/serviceconnection.js";
import { retrieveData } from "../../LocalConnection/LocalConnection.js";
import { Link } from "react-router-dom";

function AdminSyllabus() {
  const [Syllabusdata, setSyllabusdata] = useState([]);
  // State to track which row is being edited
  const [formData, setFormData] = useState({ id: "", name: "", file: null });
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);
  const [getIMGSyllabus, setIMGSyllabus] = useState("");
  const retrievedAdminId = retrieveData("staff_id");

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
    await server_post_data(get_syllabus, fd)
      .then((Response) => {
        console.log(Response.data);
        if (Response.data.error) {
          handleError(Response.data.message);
        } else {
          setSyllabusdata(Response.data.message);
          setIMGSyllabus(Response.data.image_path);
          console.log(Response.data.image_path);
        }

        setshowLoaderAdmin(false);
      })
      .catch((error) => {
        setshowLoaderAdmin(false);
      });
  };

  // Function to handle file input change

  const master_data_action = async (call_id, flag) => {
    try {
      setshowLoaderAdmin(true);

      const fd = new FormData();

      fd.append("pk", call_id);
      fd.append("flag_for", flag);

      console.log(call_id);

      const response = await server_post_data(delete_syllabus, fd);

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
  console.log(Syllabusdata);
  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-header">
        <AdminHeader />
        <div className="app-main">
          <AdminSidebar />
          <div className="container mt-5">
            <div className="AddROwaddtxt">
              <div className="addRowbtn">
                <div className="page-title-actions add_funtion_call">
                  <Link onClick={() => handleLinkClick("/add_syllabus")}>
                    <button
                      type="button"
                      className="btn-shadow mr-3 btn btn-dark"
                    >
                      <i className="fa fa-plus">&nbsp; Add Syllabus</i>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="adEdittxt">
                <h1>Add News</h1>
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

                    <th className="text-center">PDFs</th>

                    <th className="text-center">Title</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {!Syllabusdata
                    ? {}
                    : Syllabusdata.map((person, index) => (
                        <tr key={index}>
                          <td className="text-center text-muted">
                            {index + 1}
                          </td>
                          <td className="text-center">
                            {formatDateString(person.entry_date)}
                          </td>
                          <td className="text-center">{person.pdf_url}</td>

                          <td className="text-center">
                            <img
                              className="width_height_50px"
                              src={APL_LINK + getIMGSyllabus + person.pdf_url}
                              alt={person.Image_url}
                            ></img>
                            {person.pdf_url}
                          </td>
                          <td className="text-center">{person.title}</td>
                          <td className="text-center">
                            <div class="dltsvBtn ">
                              <Link
                                onClick={() =>
                                  handleLinkClick(
                                    "/edit_syllabus/" + person.primary_id
                                  )
                                }
                              >
                                <button
                                  type="button"
                                  tabIndex="0"
                                  className="dropdown-item editBtn"
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
                                  className="dropdown-item dltBtn"
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
    </div>
  );
}
export default AdminSyllabus;
