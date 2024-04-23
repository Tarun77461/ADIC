import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import { Link } from "react-router-dom";
import {
  handleError,
  handleSuccess,
  formatDateString,
} from "../../Common jquery/CommonJquery.js";
import {
  server_post_data,
  get_contact_us,
  delete_contact,
} from "../../ServiceConnection/serviceconnection.js";
import { retrieveData } from "../../LocalConnection/LocalConnection.js";

const AdminContactus = () => {
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);
  const [getcontact, setgetcontact] = useState([]);
  const retrievedAdminId = retrieveData("staff_id");

  useEffect(() => {
    const flag = "1";
    const call_id = "0";
    master_data_get(flag, call_id);
  }, []);

  const master_data_get = async (start_date, end_date, flag, call_id) => {
    setshowLoaderAdmin(true);
    const fd = new FormData();

    fd.append("start_date", start_date);
    fd.append("end_date", end_date);
    fd.append("flag", flag);
    fd.append("call_id", call_id);
    await server_post_data(get_contact_us, fd)
      .then((Response) => {
        console.log(Response.data);
        if (Response.data.error) {
          handleError(Response.data.message);
        } else {
          setgetcontact(Response.data.message);
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

      const response = await server_post_data(delete_contact, fd);

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

  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-header">
        <div className={showLoaderAdmin ? "loading_website" : ""}></div>
        <AdminHeader />

        <div className="app-main">
          <AdminSidebar />
          <div className="container mt-5">
            <div className="AddROwaddtxt">
              <div className="adEdittxt">
                <h1>ContactUs</h1>
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

                    <th className="text-center">User Name</th>

                    <th className="text-center">User Email</th>
                    <th className="text-center">Phone</th>
                    <th className="text-center">Message</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {!getcontact
                    ? {}
                    : getcontact.map((person, index) => (
                        <tr key={index}>
                          <td className="text-center text-muted">
                            {index + 1}
                          </td>

                          <td className="text-center">
                            {formatDateString(person.entry_date)}
                          </td>

                          <td className="text-center">{person.username}</td>
                          <td className="text-center">{person.useremail}</td>
                          <td className="text-center">{person.Phone}</td>
                          <td className="text-center">{person.message}</td>

                          <td className="text-center">
                            <div class="dltsvBtn ">
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

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminContactus;
