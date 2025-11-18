import { useState } from "react";
import { Link } from "react-router";
import { About } from './../../Pages/About';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
        
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Ahmed<span className="text-blue-500">.tech</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </div>

          
          <div className="hidden md:flex items-center space-x-8">
           <Link to="cases"> <a href="" className="text-gray-300 hover:text-blue-400">Cases</a></Link>
           <Link to="ourservice"> <a href="" className="text-gray-300 hover:text-blue-400">Services</a></Link>
            <Link to="about"><a href="" className="text-gray-300 hover:text-blue-400">About</a> </Link>
            <Link to="contact"><a href="" className="text-gray-300 hover:text-blue-400">Contact</a></Link>
           <Link to="News"> <a href="" className="text-gray-300 hover:text-blue-400">New</a></Link>

          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.95)] backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >  
      <Link to="cases">  <a href="#home" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-200 hover:text-blue-400">Cases</a></Link>
        <Link to="ourservice">  <a href="#home" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-200 hover:text-blue-400">Services</a></Link>
        <Link to="about"> <a href="#about" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-200 hover:text-blue-400">About</a></Link>
        <a href="#projects" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-200 hover:text-blue-400">New</a>
         <Link to="contact"> <a href="#contact" onClick={() => setMenuOpen(false)} className="text-2xl text-gray-200 hover:text-blue-400">Contact</a></Link>
      </div>
    </nav>
  );
};
