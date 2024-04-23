import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import dashboardIcn from "../../assets/dashboard-160.svg";
import webinfoIcn from "../../assets/webinfo.svg";
import stafficn from "../../assets/staff-15.svg";
import studyIcn from "../../assets/syllabus-svgrepo-com.svg";
import newsIcn from "../../assets/news-svgrepo-com.svg";
import Actsicn from "../../assets/Actsicn.svg";
import impLinkIcn from "../../assets/links-folder-svgrepo-com.svg";
import {
  handleLinkClick,
  handleError,
} from "../../Common jquery/CommonJquery.js";
import {
  server_post_data,
  get_userright_data,
} from "../../ServiceConnection/serviceconnection.js";
import { retrieveData } from "../../LocalConnection/LocalConnection.js";
function AdminSidebar() {
  const location = useLocation();
  const currentUrl = location.pathname;
  const retrievedAdminId = retrieveData("staff_id");
  const retrievedAdminProfession = retrieveData("admin_profession");
  const [editBlogData, seteditBlogData] = useState([]);
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);
  const master_data_get = async (start_date, end_date, flag, call_id) => {
    setshowLoaderAdmin(true);
    const fd = new FormData();
    fd.append("admin_id", retrievedAdminId);
    fd.append("start_date", start_date);
    fd.append("end_date", end_date);
    fd.append("flag", flag);
    fd.append("call_id", call_id);
    await server_post_data(get_userright_data, fd)
      .then((Response) => {
        if (Response.data.error) {
          handleError(Response.data.message);
        } else {
          console.log(Response.data.message.seo_loop);
          seteditBlogData(Response.data.message.seo_loop);
        }

        setshowLoaderAdmin(false);
      })
      .catch((error) => {
        setshowLoaderAdmin(false);
      });
  };

  useEffect(() => {
    const url = currentUrl;
    const parts = url.split("/");
    if (parts.length !== 1) {
      const start_date = "";
      const end_date = "";
      const flag = "1";
      const call_id = parts[1];
      master_data_get(start_date, end_date, flag, call_id);
    }
  }, []);

  const match_and_return_seo_link = (data_seo_link_final) => {
    let data_seo_link = false;
    console.log("Data SEO Link Final:", data_seo_link_final);
    if (editBlogData) {
      console.log("Edit Blog Data:", editBlogData);
      const matchedItem = editBlogData.find(
        (data) => data_seo_link_final === data.fun_url
      );
      console.log("Matched Item:", matchedItem);
      if (matchedItem) {
        data_seo_link = true;
      }
    }

    return data_seo_link;
  };

  return (
    <div className="app-sidebar sidebar-shadow">
      <div class="app-header__logo">
        <div class="logo-src"></div>
        <div class="header__pane ml-auto">
          <div>
            <button
              type="button"
              class="hamburger close-sidebar-btn hamburger--elastic"
              data-class="closed-sidebar"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="app-header__mobile-menu">
        <div>
          <button
            type="button"
            class="hamburger hamburger--elastic mobile-toggle-nav"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div class="app-header__menu">
        <span>
          <button
            type="button"
            class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
          >
            <span class="btn-icon-wrapper">
              <i class="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </span>
      </div>
      <div class="scrollbar-sidebar ps ps--active-y">
        <div class="app-sidebar__inner">
          <ul class="vertical-nav-menu metismenu">
            <li className="app-sidebar__heading ">Dashboard</li>
            <li>
              <Link
                onClick={() => handleLinkClick("/admin_dashboard")}
                className={
                  currentUrl.toLowerCase() === "/admin_dashboard".toLowerCase()
                    ? "mm-active"
                    : ""
                }
              >
                <div className="dashboardIcn">
                  {" "}
                  <img src={dashboardIcn}></img>
                </div>
                Dashboard
              </Link>
            </li>
            <li className="app-sidebar__heading">Enquiry/Booking</li>

            <li>
              <Link
                onClick={() => handleLinkClick("/admin_websitenfo")}
                className={
                  currentUrl.toLowerCase() ===
                    "/admin_websitenfo".toLowerCase() ||
                  currentUrl.toLowerCase() ===
                    "/admin_websitenfo".toLowerCase() ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_websitenfo".toLowerCase()) ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_websitenfo".toLowerCase())
                    ? "mm-active"
                    : ""
                }
              >
                <div className="dashboardIcn">
                  {" "}
                  <img src={webinfoIcn}></img>
                </div>
                Website Info
              </Link>
            </li>

            <li>
              <Link
                onClick={() => handleLinkClick("/admin_news")}
                className={
                  currentUrl.toLowerCase() === "/admin_news".toLowerCase() ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_news".toLowerCase()) ||
                  currentUrl.toLowerCase().includes("/admin_news".toLowerCase())
                    ? "mm-active"
                    : ""
                }
              >
                <div className="dashboardIcn">
                  {" "}
                  <img src={newsIcn}></img>
                </div>
                Amin News
              </Link>
            </li>

            <li>
              <Link
                onClick={() => handleLinkClick("/admin_programe")}
                className={
                  currentUrl.toLowerCase() ===
                    "/admin_programe".toLowerCase() ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_programe".toLowerCase())
                    ? "mm-active"
                    : ""
                }
              >
                <div className="dashboardIcn">
                  {" "}
                  <img src={webinfoIcn}></img>
                </div>
                Admin Programme
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleLinkClick("/admin_facility")}
                className={
                  currentUrl.toLowerCase() ===
                    "/admin_facility".toLowerCase() ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_facility".toLowerCase())
                    ? "mm-active"
                    : ""
                }
              >
                <div className="dashboardIcn">
                  {" "}
                  <img src={webinfoIcn}></img>
                </div>
                Facility
              </Link>
            </li>

            <li>
              <Link
                onClick={() => handleLinkClick("/admin_syllabus")}
                className={
                  currentUrl.toLowerCase() ===
                    "/admin_syllabus".toLowerCase() ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_syllabus".toLowerCase()) ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_syllabus".toLowerCase())
                    ? "mm-active"
                    : ""
                }
              >
                <div className="dashboardIcn">
                  {" "}
                  <img src={studyIcn}></img>
                </div>
                Syllabus
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleLinkClick("/admin_Acts")}
                className={
                  currentUrl.toLowerCase() === "/admin_Acts".toLowerCase() ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_Acts".toLowerCase()) ||
                  currentUrl.toLowerCase().includes("/admin_Acts".toLowerCase())
                    ? "mm-active"
                    : ""
                }
              >
                <div className="dashboardIcn">
                  {" "}
                  <img src={Actsicn}></img>
                </div>
                Acts
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleLinkClick("/admin_imlink")}
                className={
                  currentUrl.toLowerCase() === "/admin_imlink".toLowerCase() ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_imlink".toLowerCase()) ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_imlink".toLowerCase())
                    ? "mm-active"
                    : ""
                }
              >
                <div className="dashboardIcn">
                  {" "}
                  <img src={impLinkIcn}></img>
                </div>
                Important Links
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleLinkClick("/admin_staff")}
                className={
                  currentUrl.toLowerCase() === "/admin_staff".toLowerCase() ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_staff".toLowerCase()) ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_staff".toLowerCase())
                    ? "mm-active"
                    : ""
                }
              >
                <div className="dashboardIcn">
                  {" "}
                  <img src={stafficn}></img>
                </div>
                Administrative Staffs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleLinkClick("/admin_faculty")}
                className={
                  currentUrl.toLowerCase() === "/admin_faculty".toLowerCase() ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_faculty".toLowerCase()) ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_faculty".toLowerCase())
                    ? "mm-active"
                    : ""
                }
              >
                <div className="dashboardIcn">
                  {" "}
                  <img src={webinfoIcn}></img>
                </div>
                Faculty Deatails
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleLinkClick("/Admin_guest_facuilty")}
                className={
                  currentUrl.toLowerCase() ===
                    "/Admin_guest_facuilty".toLowerCase() ||
                  currentUrl
                    .toLowerCase()
                    .includes("/Admin_guest_facuilty".toLowerCase()) ||
                  currentUrl
                    .toLowerCase()
                    .includes("/Admin_guest_facuilty".toLowerCase())
                    ? "mm-active"
                    : ""
                }
              >
                <div className="dashboardIcn">
                  {" "}
                  <img src={webinfoIcn}></img>
                </div>
                Guest Faculty
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleLinkClick("/admin_rti")}
                className={
                  currentUrl.toLowerCase() === "/admin_rti".toLowerCase() ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_rti".toLowerCase()) ||
                  currentUrl.toLowerCase().includes("/admin_rti".toLowerCase())
                    ? "mm-active"
                    : ""
                }
              >
                <div className="dashboardIcn">
                  {" "}
                  <img src={webinfoIcn}></img>
                </div>
                RTI
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleLinkClick("/admin_graviditional")}
                className={
                  currentUrl.toLowerCase() ===
                    "/admin_graviditional".toLowerCase() ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_graviditional".toLowerCase()) ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_graviditional".toLowerCase())
                    ? "mm-active"
                    : ""
                }
              >
                <div className="dashboardIcn">
                  {" "}
                  <img src={webinfoIcn}></img>
                </div>
                Grievance Redressal
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleLinkClick("/admin_contact")}
                className={
                  currentUrl.toLowerCase() === "/admin_contact".toLowerCase() ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_contact".toLowerCase()) ||
                  currentUrl
                    .toLowerCase()
                    .includes("/admin_contact".toLowerCase())
                    ? "mm-active"
                    : ""
                }
              >
                <div className="dashboardIcn">
                  {" "}
                  <img src={webinfoIcn}></img>
                </div>
                Admin Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
