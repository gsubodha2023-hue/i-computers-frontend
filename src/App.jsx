import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import RegisterPage from "./pages/registerPage";
import AdminPage from "./pages/adminPage";


function App () {
  return (
    <BrowserRouter>
      <div className="w-full h-screen bg-red-500">
        <div className="w-125 h-full bg-blue-500">
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin/*" element={<AdminPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;