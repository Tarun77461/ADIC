import { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import {
  handleError,
  formatDateString,
  handleConfimDeleteClick,
  handleSuccess,
} from "../../Common jquery/CommonJquery.js";
import { Link } from "react-router-dom";
import {
  server_post_data,
  get_rti,
} from "../../ServiceConnection/serviceconnection.js";
import { retrieveData } from "../../LocalConnection/LocalConnection.js";

const RtiPage = () => {
  const [documents, setDocuments] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const [BlogImageLinkData, setsBlogImageLinkData] = useState("");
  const retrievedAdminId = retrieveData("staff_id");
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    pdf: null,
  });
  const [showLoaderAdmin, setShowLoaderAdmin] = useState(false);

  useEffect(() => {
    const flag = "1";
    const call_id = "0";
    master_data_get(flag, call_id);
  }, []);

  const master_data_get = async (flag, call_id) => {
    setShowLoaderAdmin(true);
    const fd = new FormData();
    fd.append("flag", flag);
    fd.append("call_id", call_id);
    try {
      const Response = await server_post_data(get_rti, fd);
      console.log(Response.data);
      if (Response.data.error) {
        handleError(Response.data.message.title_name);
      } else {
        setDocuments(Response.data.message);
      }
    } catch (error) {
      // Handle error
    }
    setShowLoaderAdmin(false);
  };

  const handleLinkClick = (link, blank = "") => {
    // Reload the page when the link is clicked
    if (blank === "") {
      window.location.href = link;
    } else {
      window.open(link, blank);
    }
  };
  console.log(documents);

  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-header">
        <div className={showLoaderAdmin ? "loading_website" : ""}></div>
        <AdminHeader />
        <div className="app-main">
          <AdminSidebar />
          <div className="container mt-5">
            <div className="AddROwaddtxt">
              <div className="addRowbtn"></div>
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

                    <th className="text-center">Title</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {!documents
                    ? {}
                    : documents.map((person, index) => (
                        <tr key={index}>
                          <td className="text-center text-muted">
                            {index + 1}
                          </td>

                          <td className="text-center">
                            {formatDateString(person.entry_date)}
                          </td>

                          <td className="text-center">{person.ImpImageLink}</td>
                          <td className="text-center">{person.title}</td>

                          <td className="text-center">
                            <div class="dltsvBtn ">
                              <Link
                                onClick={() =>
                                  handleLinkClick(
                                    "/edit_rtiEdit/" + person.primary_id
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
};

export default RtiPage;
