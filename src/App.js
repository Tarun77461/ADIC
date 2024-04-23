import "./css/admincss/loginAdmin.css";
import "./css/admincss/adminheader.css";
import "./css/admincss/admindashboard.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import AdminLogin from "./components/AdminPenal/AdminLogin";
import AdminDashboard from "./components/AdminPenal/AdminDashboard";
import AdminHeader from "./components/AdminPenal/AdminHeader";
import AdminSidebar from "./components/AdminPenal/AdminSidebar";
import AdminFooter from "./components/AdminPenal/AdminFooter";
import AdminHome from "./components/AdminPenal/AdminHome";
import AdminNews from "./components/AdminPenal/AdminNews";
import ProgramAdvisory from "./components/AdminPenal/ProgramAdvisory";
import AdminSyllabus from "./components/AdminPenal/AdminSyllabus";
import AdminActs from "./components/AdminPenal/AdminActs";
import WebsiteInfo from "./components/AdminPenal/WebsiteInfo";
import EditActFormm from "./components/AdminPenal/EditActFormm";
import AdminImportantlink from "./components/AdminPenal/AdminImportantlink";
import AdminStaffData from "./components/AdminPenal/AdminStaffData";
import AdminGuestFacultie from "./components/AdminPenal/AdminGuestFacultie";
import AdminContactus from "./components/AdminPenal/AdminContactus";
import AdminFacilityPage from "./components/AdminPenal/AdminFacilityPage";
import AdminFacultyDeatails from "./components/AdminPenal/AdminFacultyDeatails";
import RtiPage from "./components/AdminPenal/RtiPage";
import Graviditional from "./components/AdminPenal/Graviditional";
import GuestEdit from "./components/AdminPenal/GuestEdit";
import GuestFacultyAdd from "./components/AdminPenal/GuestFacultyAdd";
import EditNews from "./components/AdminPenal/EditNews";
import AddNews from "./components/AdminPenal/AddNews";
import UpdateRTI from "./components/AdminPenal/UpdateRTI";
import UpdateGraviditional from "./components/AdminPenal/UpdateGraviditional";
import ADDSyllabus from "./components/AdminPenal/ADDSyllabus";
import EditSyllabus from "./components/AdminPenal/EditSyllabus";
import AddActs from "./components/AdminPenal/AddActs";
import EditImpLink from "./components/AdminPenal/EditImpLink";
import AddImportantLink from "./components/AdminPenal/AddImportantLink";
import Addfacilitie from "./components/AdminPenal/Addfacilitie";
import Editfacilitie from "./components/AdminPenal/Editfacilitie";
import Editfaculty from "./components/AdminPenal/Editfaculty";
import Addfaculty from "./components/AdminPenal/Addfaculty";
import AddProgram from "./components/AdminPenal/AddProgram";
import EditProgram from "./components/AdminPenal/EditProgram";
import AddStaff from "./components/AdminPenal/AddStaff";
import EditStaff from "./components/AdminPenal/EditStaff";

function App() {
  return (
    <div className="container-fluid cont">
      <BrowserRouter>
        <Routes>
          {/*------------Admin Panal----------------------*/}
          {/*--Login Amin login -*/}
          <Route path="/admin_login" element={<AdminLogin />} />
          {/*--Login Amin Header-*/}
          <Route path="/admin_header" element={<AdminHeader />} />
          {/*--Login Amin Sidebar-*/}
          <Route path="/admin_sidebar" element={<AdminSidebar />} />
          {/*--Login Amin Footer-*/}
          <Route path="/admin_footer" element={<AdminFooter />} />
          <Route path="/admin_staff" element={<AdminStaffData />} />
          <Route path="/add_staff" element={<AddStaff />} />
          <Route path="/edit_staffEdit/:id" element={<EditStaff />} />
          <Route path="/admin_facility" element={<AdminFacilityPage />} />
          <Route path="/add_facility" element={<Addfacilitie />} />
          <Route path="/edit_facility/:id" element={<Editfacilitie />} />
          <Route path="/admin_contact" element={<AdminContactus />} />
          <Route path="/admin_rti" element={<RtiPage />} />
          <Route path="/admin_faculty" element={<AdminFacultyDeatails />} />
          <Route path="/add_faculty" element={<Addfaculty />} />
          <Route path="/edit_faculty/:id" element={<Editfaculty />} />
          <Route
            path="/Admin_guest_facuilty"
            element={<AdminGuestFacultie />}
          />
          <Route path="/edit_guestEdit/:id" element={<GuestEdit />} />
          <Route path="/admin_facultyAdd" element={<GuestFacultyAdd />} />
          <Route path="/edit_rtiEdit/:id" element={<UpdateRTI />} />
          <Route
            path="/edit_graviditionalEdit/:id"
            element={<UpdateGraviditional />}
          />
          {/*--Login Amin Dashboard-*/}
          <Route path="/admin_dashboard" element={<AdminDashboard />} />
          <Route path="/admin_home" element={<AdminHome />} />
          <Route path="/admin_news" element={<AdminNews />} />
          <Route path="/edit_newsEdit/:id" element={<EditNews />} />
          <Route path="/admin_add_news" element={<AddNews />} />
          <Route path="/admin_programe" element={<ProgramAdvisory />} />
          <Route path="/add_program" element={<AddProgram />} />
          <Route path="/edit_programEdit/:id" element={<EditProgram />} />
          <Route path="/admin_syllabus" element={<AdminSyllabus />} />
          <Route path="/add_syllabus" element={<ADDSyllabus />} />
          <Route path="/edit_syllabus/:id" element={<EditSyllabus />} />
          <Route path="/admin_Acts" element={<AdminActs />} />
          <Route path="/addd_Acts" element={<AddActs />} />
          <Route path="/edit_acts/:id" element={<EditActFormm />} />
          <Route path="/admin_websitenfo" element={<WebsiteInfo />} />
          <Route path="/admin_imlink" element={<AdminImportantlink />} />
          <Route path="/add_implink" element={<AddImportantLink />} />
          <Route path="/edit_importantlink/:id" element={<EditImpLink />} />
          <Route path="/admin_graviditional" element={<Graviditional />} />
          {/*------------Admin End---------------------*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
