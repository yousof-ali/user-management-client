import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import './header.css'



export const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/myaccount"}>My Account</NavLink>
      </li>
      <li>
        <NavLink to={"/invoice"}>Invoice</NavLink>
      </li>
      <li>
        <NavLink to={"/money"}>Money Receipt</NavLink>
      </li>
      <li>
        <NavLink to={"/item3"}>Customer Info</NavLink>
      </li>
    </>
  );

const Header = () => {
  const [menu, setmenu] = useState(true);

  const handleMenu = () =>{
    setmenu(!menu);
  }
  return (
    <div className="bg-base-200 relative px-2 md:px-4 py-2">
      <div className="flex">
        <div>
          <div onClick={handleMenu} className="btn flex  md:hidden tbn-ghost text-2xl">
            {menu?<CiMenuBurger />:<RxCross1 />}
          {/*  */}
          </div>
          <div className={`absolute md:hidden ${menu?"hidden":"flex"} top-16 left-0 bg-base-200 px-10 py-4`}>
            <ul className="space-y-2 font-bold "> 
                {links}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="btn btn-ghost text-2xl">logo</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
