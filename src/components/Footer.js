import React from "react";
import LinkDinIcon from "../assets/icons8-linkedin.svg";
import FacbookIcon from "../assets/icons8-facebook.svg";
import intsaGramIcon from "../assets/instagram-167-svgrepo-com.svg";
import YoutubeIcon from "../assets/youtube-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  footerPage,
  companyMenu,
  footerMenu,
  quickLinksMenu,
  footerCopyright,
} from "../Common jquery/webkitText";
import { handleError } from "../Common jquery/CommonJquery.js";
import { retrieveData } from "../LocalConnection/LocalConnection.js";
import {
  server_post_data,
  get_all_social_links,
  get_rti,
  get_gravidational,
  APL_LINK,
} from "../ServiceConnection/serviceconnection.js";

const Footer = () => {
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);
  const [socialLinks, setSocialLinks] = useState([]);
  const [getRitData, setRitData] = useState([]);
  const [getRitIMGData, setRitIMGData] = useState([]);
  const [getgravData, setgravData] = useState([]);
  const [getImggravData, setImggravData] = useState([]);

  const retrievedAdminId = retrieveData("staff_id");

  useEffect(() => {
    const flag = "1";
    const call_id = "0";
    master_data_get(flag, call_id);
    master_data_get2(flag, call_id);
    master_data_get3(flag, call_id);
  }, []);
  const master_data_get = async (flag, call_id) => {
    setshowLoaderAdmin(true);
    const fd = new FormData();

    fd.append("flag", flag);
    fd.append("call_id", call_id);
    await server_post_data(get_all_social_links, fd)
      .then((Response) => {
        if (Response.data.error) {
          handleError(Response.data.message);
        } else {
          setSocialLinks(Response.data.message[0]);
        }

        setshowLoaderAdmin(false);
      })
      .catch((error) => {
        setshowLoaderAdmin(false);
      });
  };

  const master_data_get2 = async (start_date, end_date, flag, call_id) => {
    setshowLoaderAdmin(true);
    const fd = new FormData();
    fd.append("primary_id", retrievedAdminId);
    fd.append("flag", flag);
    fd.append("call_id", call_id);

    await server_post_data(get_rti, fd)
      .then((Response) => {
        if (Response.data.error) {
          handleError(Response.data.message);
        } else {
          setRitData(Response.data.message[0]);
          console.log(Response.data);
          setRitIMGData(Response.data.image_path);
          // setEditorDatMainID(Response.data.message[0]);
        }

        setshowLoaderAdmin(false);
      })
      .catch((error) => {
        setshowLoaderAdmin(false);
      });
  };
  const master_data_get3 = async (start_date, end_date, flag, call_id) => {
    setshowLoaderAdmin(true);
    const fd = new FormData();
    fd.append("primary_id", retrievedAdminId);
    fd.append("flag", flag);
    fd.append("call_id", call_id);

    await server_post_data(get_gravidational, fd)
      .then((Response) => {
        if (Response.data.error) {
          handleError(Response.data.message);
        } else {
          setgravData(Response.data.message[0]);
          setImggravData(Response.data.image_path);
        }

        setshowLoaderAdmin(false);
      })
      .catch((error) => {
        setshowLoaderAdmin(false);
      });
  };

  console.log(getRitData);
  // console.log(getgravData);
  function openPDF(pdfLink) {
    window.open(pdfLink, "_blank");
  }
  return (
    <div>
      <div className={showLoaderAdmin ? "loading_website" : ""}></div>
      <div className="row m-0">
        <div className="footer">
          <div class="pg-footer">
            <footer class="footer">
              <svg
                class="footer-wave-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 100"
                preserveAspectRatio="none"
              >
                <path
                  class="footer-wave-path"
                  d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
                ></path>
              </svg>
              <div class="footer-content">
                <div class="footer-content-column">
                  <div class="footer-menu">
                    <h2 class="footer-menu-name">{footerMenu.title}</h2>
                    <ul id="menu-get-started" class="footer-menu-list  ">
                      <li class="menu-item menu-item-type-post_type menu-item-object-product fottrrrrrr">
                        <div>
                          {" "}
                          <a href={socialLinks.link}>{socialLinks.address}</a>
                        </div>

                        <div>
                          {" "}
                          <a href={socialLinks.link}>{socialLinks.contactno}</a>
                        </div>
                        <div>
                          {" "}
                          <a href={socialLinks.link}>{socialLinks.alterno}</a>
                        </div>
                        <div>
                          {" "}
                          <a href={socialLinks.link}>{socialLinks.email}</a>
                        </div>
                      </li>
                      {/* ))} */}
                    </ul>
                  </div>
                </div>
                <div class="footer-content-column">
                  <div class="footer-menu"></div>
                </div>
                <div class="footer-content-column">
                  <div class="footer-menu">
                    <h2 class="footer-menu-name"> Quick Links</h2>
                    <ul id="menu-quick-links" class="footer-menu-list">
                      <li class="menu-item menu-item-type-custom menu-item-object-custom">
                        <Link to="/">
                          {" "}
                          <p></p>Home
                        </Link>
                      </li>
                      <li class="menu-item menu-item-type-custom menu-item-object-custom">
                        <Link to="/about_us">About Us</Link>
                      </li>
                      <li class="menu-item menu-item-type-custom menu-item-object-custom">
                        <a target="_blank" rel="noopener noreferrer" href="#">
                          Important Links
                        </a>
                      </li>

                      <li class="menu-item menu-item-type-post_type menu-item-object-page">
                        <Link to="/facilites">Facilites</Link>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page">
                        <button
                          className="RTIBTNN"
                          onClick={() =>
                            openPDF(
                              APL_LINK +
                                getRitIMGData +
                                getRitData.ImpImageLink,
                              "Downoad.pdf"
                            )
                          }
                        >
                          {getRitData.title}
                        </button>
                      </li>
                      <li class="menu-item menu-item-type-post_type menu-item-object-page">
                        <button
                          className="RTIBTNN"
                          onClick={() =>
                            openPDF(
                              APL_LINK +
                                getImggravData +
                                getgravData.ImpImageLink,
                              "PDF_file_name.pdf"
                            )
                          }
                        >
                          {getgravData.title}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="footer-content-column">
                  <div class="footer-call-to-action">
                    <div className="AddMap">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14669.328572036371!2d77.4317516!3d23.1945632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43a5b9406e41%3A0x85e32ec66cd85e55!2sINSTITUTE%20OF%20CO-OPERATIVE%20MANAGEMENT%2C%20BHOPAL!5e0!3m2!1sen!2sin!4v1711621967613!5m2!1sen!2sin"
                        width="600"
                        className="small-map"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>

                <div class="footer-social-links ">
                  <svg
                    class="footer-social-amoeba-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 236 54"
                  >
                    <path
                      class="footer-social-amoeba-path"
                      d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
                    ></path>
                  </svg>
                  <a
                    class="footer-social-link linkedin"
                    href={socialLinks.LinkedInname}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="hidden-link-text">{socialLinks.name}</span>
                    <div className="LinkDinIcon">
                      <img src={LinkDinIcon} alt={socialLinks.icon}></img>
                    </div>
                  </a>
                  <a
                    class="footer-social-link facebook"
                    href={socialLinks.Facebookname}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="hidden-link-text">{socialLinks.name}</span>
                    <div className="FacbookIcon">
                      <img src={FacbookIcon} alt={socialLinks.icon}></img>
                    </div>
                  </a>
                  <a
                    className={`footer-social-link instagram ${socialLinks.icon}`}
                    href={socialLinks.Instagramname}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="hidden-link-text">{socialLinks.name}</span>
                    <div className="intsaGramIcon">
                      <img src={intsaGramIcon} alt={socialLinks.icon}></img>
                    </div>
                  </a>
                  <a
                    className={`footer-social-link youtube ${socialLinks.icon}`}
                    href={socialLinks.Youtubename}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="hidden-link-text">{socialLinks.name}</span>
                    <div className="YoutubeIcon">
                      <img src={YoutubeIcon} alt={socialLinks.icon}></img>
                    </div>
                  </a>
                </div>
              </div>
              <div class="footer-copyright">
                <div class="footer-copyright-wrapper">
                  <p class="footer-copyright-text">
                    <a
                      class="footer-copyright-link"
                      href={footerCopyright.link}
                      target="_self"
                    >
                      {footerCopyright.text}
                    </a>
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
