import React from "react";


function Cards({ icon, text }){
    return (
      <div className="flex w-full h-[150px] mt-2 rounded-xl bg-white p-6 shadow-lg">
        <div className="flex items-center mr-3 text-gray-700">{icon}</div>
        <p className="flex items-center text-slate-800">{text}</p>
      </div>
    );
};
export default Cards