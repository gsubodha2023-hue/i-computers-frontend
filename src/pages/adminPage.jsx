import { Link, Routes, Route } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { CiViewList } from "react-icons/ci";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

function AdminPage() {
  return (
    <>
      <div className="w-full h-screen flex bg-accent">
        <div className="w-75 h-full bg-accent">
          <div className="w-full h-25 text-primary flex items-center">
            <img src={logoImg} alt="Logo" className="h-full" />
            <h1 className="text-2xl font-bold">ADMIN</h1>
          </div>
        </div>
      </div>

      <div className="w-full h-100 bg-gray-100 text-2xl flex flex-col">
        <Link to="/.admin/users" className="flex items-center gap-2.5 w-full h-12.5">
          <FiUsers /> Users
        </Link>
        <Link to="/.admin/products" className="flex items-center gap-2.5 w-full h-12.5">
          <CiViewList /> Products
        </Link>
        <Link to="/.admin/reviews" className="flex items-center gap-2.5 w-full h-12.5">
          <MdOutlineRateReview /> Reviews
        </Link>
        <Link to="/.admin/settings" className="flex items-center gap-2.5 w-full h-12.5">
          <MdOutlineAdminPanelSettings /> Settings
        </Link>
      </div>
       <div className="w-[calc(100% - 300px)] h-full max-h-full bg-primary">
        <Routes>
            <Route path="/" element={<AdminPage />} />
            <Route path="/users" element={<h1>ORDERS</h1>} />
            <Route path="/products" element={<h1>PRODUCTS</h1>} />
            <Route path="/reviews" element={<h1>REVIEWS</h1>} />
            <Route path="/settings" element={<h1>SETTINGS</h1>} />
        </Routes>
       </div>
    </>
   
  );
}
export default AdminPage;