import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-25 bg-accent flex items-center justify-center">
        <img src="/logo.png" alt="Logo" className="w-[100px] h-full" />
      <div className="w-full h-full flex text-xl text-primary items-center justify-center gap-5">
        <Link to ="/">Home</Link>
        <Link to ="/products">Products</Link>
        <Link to ="/about">About</Link>
        <Link to ="/contact">Contact</Link>
      </div>
    </header>
  );
}