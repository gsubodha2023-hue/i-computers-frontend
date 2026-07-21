import backgroundImage from "../assets/Login_page_bg.jpg";

export default function LoginPage() {
  return (
    <div className="w-full h-screen bg-[url('/Login_page_bg.jpg)]">
        <img src={backgroundImage} alt="Background" className="w-full h-full object-cover" />
    </div>
  );
}