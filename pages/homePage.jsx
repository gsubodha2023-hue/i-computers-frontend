import Header from "../src/components/header";
import { Routes, Route } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="w-full h-screen overflow-y-scroll max-h-full ">
      <Header />
      <div className="w-full min-h-[calc(100%-100px)]">
        <Routes>
            <Route path="/" element={<h1>HOME PAGE</h1>} />
            <Route path="/products" element={<h1>PRODUCTS PAGE</h1>} />
            <Route path="/about" element={<h1>ABOUT PAGE</h1>} />
            <Route path="/contact" element={<h1>CONTACT PAGE</h1>} />
            <Route path="/*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </div>
    </div>
  );
}