import React from "react";

function Titulo(){
    return (
      <div className="md:flex justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 py-3 px-5">
            Dashboard
          </h1>
          <h4 className="text-lg text-gray-600 py-3 px-5 italic">
            Analitycs / <span className="text-[#184AFF]">shop</span>
          </h4>
        </div>

        <button className="shadow-lg flex items-center bg-[#1A83FB]  px-8 py-1 md:h-[45px] md:mt-4 rounded-full text-white mx-5">
          <i class="mr-2 flex text-2xl bx bx-cloud-download"></i>
          <span className=""> Download CSV</span>
        </button>
      </div>
    );
};

export default Titulo;