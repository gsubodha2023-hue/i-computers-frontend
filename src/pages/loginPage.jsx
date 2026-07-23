import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login() {try {
    const res=await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/login", {
      email : email,
      password : password
    });
    if(res.data.role === "admin") {
      navigate("/admin");
    }else {
      navigate("/");
    }
    toast.success("Login successful!");
    console.log(res.data);
  } catch (error) {
    toast.error("Error during login:");
    console.log(error);
  }
  }

  return (
    <div className="w-full h-screen bg-[url('/Login_page_bg.jpg')] bg-center bg-cover bg-no-repeat flex">
      <div className="w-12.5 h-full flex justify-center items-center">
        <img src="/Logo.png" alt="Logo" className="w-50 h-50 mb-5 object-cover" />
        <h1 className="text-3xl font-bold text-red-500 text-shadow-2xs text-shadow-accent text-center">Plug In. Power Up. Play hard.</h1>
        <p className="text-[30px] text-white italic">Your Ultimate Destination for Gaming Gear.</p>
      </div>
      <div className="w-12.5 h-full flex justify-center items-center">
        <div className="w-112.5 h-150 backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col justify-center">
          <h1 className="text-[40px] font-bold mb-5 text-accent text-shadow-white">LOGIN</h1>
          <input 
          type="email" placeholder="Email" className="w-80 h-10 mb-5 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password" placeholder="Password" className="w-80 h-10 mb-5 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} className="w-80 h-10 bg-accent text-white font-bold rounded-lg hover:bg-transparent hover:text-accent transition-colors duration-300">
            LOGIN
          </button>
          <p className="text-white not-italic w-full mb-5 text-right">
            Forget your password? <Link to="/forget-password" className="text-accent italic hover:underline ">Reset Password</Link>
          </p>
          <p className="text-white not-italic w-full mb-5 text-right">
            Don't have an account? <Link to="/register" className="text-accent italic hover:underline ">Register here</Link>
          </p>
        </div>
      

      </div>
       
    </div>
  );
}