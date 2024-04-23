import { useState, useEffect } from "react";
import {
  server_post_data,
  login_to_superadmin,
} from "../../ServiceConnection/serviceconnection.js";
import { useNavigate } from "react-router-dom";
import {
  storeData,
  retrieveData,
} from "../../LocalConnection/LocalConnection.js";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  check_vaild_save,
  combiled_form_data,
  handleError,
} from "../../Common jquery/CommonJquery.js";
import RightAww from "../../assets/rightArrow.svg";

function AdminLogin() {
  const navigate = useNavigate();
  const [showLoaderAdmin, setshowLoaderAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSaveChangesdynamic = async (formData, urlForSave) => {
    const validData = check_vaild_save(formData);

    if (validData) {
      setshowLoaderAdmin(true);
      const compiledFormData = combiled_form_data(formData, null);

      try {
        const response = await server_post_data(urlForSave, compiledFormData);
        setshowLoaderAdmin(false);
        console.log(response.data);

        if (response.data.error) {
          alert(response.data.message);
        } else {
          const responseData = response.data.user_data;
          console.log(responseData);

          storeData("admin_email", responseData.email);
          storeData("admin_name", responseData.name);
          navigate("/admin_dashboard");
        }
      } catch (error) {
        setshowLoaderAdmin(false);
        console.error(error);
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const retrieveDatafind = retrieveData("admin_email");

    if (
      retrieveDatafind === "null" ||
      retrieveDatafind === null ||
      retrieveDatafind === "0"
    ) {
      //ss
    } else {
      navigate("/admin_dashboard");
    }
  }, [navigate]);

  return (
    <>
      {" "}
      <section className="secti">
        <div className={showLoaderAdmin ? "loading_website" : ""}></div>
        <form id="form_data_admin" className="login_condition">
          <div className="admin ">
            <button
              type="button"
              className="admin-lock"
              onClick={() =>
                handleSaveChangesdynamic("form_data_admin", login_to_superadmin)
              }
            >
              <div className="LoginBtnRightArrow">
                <img src={RightAww} alt="RightArrow" />
              </div>
            </button>

            <div className="admin-content">
              <h3 className="admin-content-header">ICM BHOPAL</h3>
              <h6 className="invalid_data text-danger"></h6>

              <div className="cred">
                <div className="cred-input">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="form-control trio_email trio_mandatory "
                    placeholder="User Id"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="cred-input login_password">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-control trio_mandatory trio_password cred-input"
                    placeholder="Password"
                    style={{ borderRadius: "5px" }}
                  />
                  <button
                    className="eye_btn_"
                    type="button"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
export default AdminLogin;
