import React from "react";
import {Globe} from "lucide-react"
import { Menu , X } from "lucide-react";
import {useState , useEffect} from "react"
const Navbar = () =>{
    const [menuOpen , setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);
    return(

        <nav className="flex relative justify-between items-center p-4  ">
            <div>
                <img className="h-10 w-auto"  src="/logo.png" alt="logo" />
            </div>

            <ul class = "hidden md:flex space-x-6 font-bold">
                <li className="flex items-center ">
                    <img className="h-25 w-auto sm:10 md:12 "src="/home.webp" />
                    <span className="hover:underline">Home</span>
                </li>
                <li className="flex items-center ">
                    <img className="h-25 w-auto sm:10 md:12"src="/experiences.png" alt="" />
                    <span className="hover:underline">Experiences</span>
                </li>
                <li className="flex items-center space-x-2">
                <img className="h-25 w-auto sm:10 md:12"src="/services.png" alt="" />
                <span className="hover:underline">Services</span>
                </li>
            
            </ul>
           <div className="hidden md:flex space-x-10 font-bold">
            <li className="list-none">Become a Host</li>
            <Globe className="hover:text-blue-600"/>
            <Menu/>
           </div>

           {/* mobile responsiveness */}
           <button  className="flex md:hidden text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}>
           {menuOpen ? <X size={28}/> : <Menu size={28}/>}
           </button>

             {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 font-bold shadow-md md:hidden">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Experiences</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Become a Host</li>
        </ul>
      )}
        </nav>
       
      
    );
}
export default Navbar