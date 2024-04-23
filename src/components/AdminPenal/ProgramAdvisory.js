import React from "react";
import { useState, useEffect } from "react";
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
  get_programe_addvisory,
  delete_program,
} from "../../ServiceConnection/serviceconnection.js";
import { retrieveData } from "../../LocalConnection/LocalConnection.js";
import { Link } from "react-router-dom";

function ProgramAdvisory() {
  const retrievedAdminId = retrieveData("staff_id");
  const [committeeMembers, setCommitteeMembers] = useState([]);
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);

  const [editRow, setEditRow] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    position: "",
    organization: "",
    role: "",
  });

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
    await server_post_data(get_programe_addvisory, fd)
      .then((Response) => {
        console.log(Response.data);
        if (Response.data.error) {
          handleError(Response.data.message);
        } else {
          setCommitteeMembers(Response.data.message);
        }

        setshowLoaderAdmin(false);
      })
      .catch((error) => {
        setshowLoaderAdmin(false);
      });
  };

  const handleDropdownChange = (event, id) => {
    const value = event.target.value;
    if (value === "edit") {
      setEditRow(id);
      const member = committeeMembers.find((member) => member.id === id);
      setFormData({
        id: id,
        position: member.position,
        organization: member.organization,
        role: member.role,
      });
    } else if (value === "delete") {
      handleDeleteMember(id);
    }
  };

  const handleAddMember = () => {
    setCommitteeMembers([
      ...committeeMembers,
      {
        id: committeeMembers.length + 1,
        position: "",
        organization: "",
        role: "",
      },
    ]);
  };

  const handleDeleteMember = (id) => {
    const updatedMembers = committeeMembers.filter(
      (member) => member.id !== id
    );
    setCommitteeMembers(updatedMembers);
  };

  const handleUpdateMember = (id) => {
    const updatedMembers = committeeMembers.map((member) => {
      if (member.id === id) {
        return {
          ...member,
          position: formData.position,
          organization: formData.organization,
          role: formData.role,
        };
      }
      return member;
    });
    setCommitteeMembers(updatedMembers);
    setEditRow(null);
    setFormData({ id: "", position: "", organization: "", role: "" });
  };
  const master_data_action = async (call_id, flag) => {
    try {
      setshowLoaderAdmin(true);

      const fd = new FormData();

      fd.append("pk", call_id);
      fd.append("flag_for", flag);

      console.log(call_id);

      const response = await server_post_data(delete_program, fd);

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
  console.log(committeeMembers);
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
                  <Link onClick={() => handleLinkClick("/add_program")}>
                    <button
                      type="button"
                      className="btn-shadow mr-3 btn btn-dark"
                    >
                      <i className="fa fa-plus">&nbsp; Add Program</i>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="adEdittxt">
                <h1>Add Program</h1>
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

                    <th className="text-center">Position</th>
                    <th className="text-center">Organisation</th>
                    <th className="text-center">Role</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {!committeeMembers
                    ? {}
                    : committeeMembers.map((person, index) => (
                        <tr key={index}>
                          <td className="text-center text-muted">
                            {index + 1}
                          </td>

                          <td className="text-center">
                            {formatDateString(person.entry_date)}
                          </td>

                          <td className="text-center">
                            {person.responsibility}
                          </td>
                          <td className="text-center">
                            {person.organisation_name}
                          </td>
                          <td className="text-center">{person.role}</td>

                          <td className="text-center">
                            <div class="dltsvBtn ">
                              <Link
                                onClick={() =>
                                  handleLinkClick(
                                    "/edit_programEdit/" + person.primary_id
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
export default ProgramAdvisory;
