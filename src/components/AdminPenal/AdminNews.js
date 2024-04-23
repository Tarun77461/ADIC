import React from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  handleError,
  handleSuccess,
  formatDateString,
} from "../../Common jquery/CommonJquery.js";
import { retrieveData } from "../../LocalConnection/LocalConnection.js";
import {
  server_post_data,
  get_news,
  delete_News,
} from "../../ServiceConnection/serviceconnection.js";

function AdminNews() {
  const [newsList, setNewsList] = useState([]);
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
    await server_post_data(get_news, fd)
      .then((Response) => {
        console.log(Response);
        if (Response.data.error) {
          handleError(Response.data.message);
        } else {
          setNewsList(Response.data.message);
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

      const response = await server_post_data(delete_News, fd);

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
    if (blank === "") {
      window.location.href = link;
    } else {
      window.open(link, blank);
    }
  };

  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-header">
        <div className={showLoaderAdmin ? "loading_website" : ""}></div>
        <AdminHeader />
        <div className="app-main">
          <AdminSidebar />
          <div className="container mt-5">
            <div className="AddROwaddtxt">
              <div className="addRowbtn">
                <div className="page-title-actions add_funtion_call addRowbtn">
                  <Link onClick={() => handleLinkClick("/admin_add_news")}>
                    <button
                      type="button"
                      className="btn-shadow mr-3 btn btn-dark"
                    >
                      Add News
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

                    <th className="text-center">Images</th>

                    <th className="text-center">Description</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {!newsList
                    ? {}
                    : newsList.map((person, index) => (
                        <tr key={index}>
                          <td className="text-center text-muted">
                            {index + 1}
                          </td>

                          <td className="text-center">
                            {formatDateString(person.entry_date)}
                          </td>

                          <td className="text-center">{person.Img_url}</td>
                          <td className="text-center">{person.news_name}</td>

                          <td className="text-center">
                            <div class="dltsvBtn">
                              <Link
                                onClick={() =>
                                  handleLinkClick(
                                    "/edit_newsEdit/" + person.primary_id
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

export default AdminNews;
