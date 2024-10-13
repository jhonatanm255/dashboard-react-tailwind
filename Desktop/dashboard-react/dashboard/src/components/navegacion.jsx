import React from "react";


function Navbar({ toggleAside, isAsideVisible }) {
    return (
      // icon init
      <nav className="flex justify-between p-5 bg-[#184AFF] relative w-full top-0 z-20">
        <i className="items-center flex text-white text-4xl bx bxs-dashboard"></i>

        <div className="flex w-[50%] gap-4 justify-between">
           {/* search */}
        <div className="flex w-[100%]">
          <input className="w-[100%] xl:w-[100%] outline-none px-3 rounded-l-full" type="search" placeholder="Search"/>
          <i class='text-white bg-gray-700 hover:bg-gray-600 my-auto p-3 py-4 cursor-pointer rounded-r-full bx bx-search-alt'></i>
        </div>
        {/* menu */}
        {/* <div>
          <ul className="text-slate-200 cursor-pointer text-lg mt-1 flex gap-4 items-center">
            <li>Home</li>
            <li>About</li>
            <li>Social</li>
            <li>Contact</li>
          </ul>
        </div> */}
        </div>

        {/* dark mode */}
        <div className="flex gap-4">
          <i className="items-center flex text-white text-xl bx bxs-moon"></i>
          <i
            id="btn-menu"
            className={`items-center flex text-white text-4xl lg:hidden ${isAsideVisible ? 'bx bx-x' : 'bx bx-menu'}`}
            onClick={toggleAside}
          ></i>
        </div>
      </nav>
    );
}

export default Navbar;


