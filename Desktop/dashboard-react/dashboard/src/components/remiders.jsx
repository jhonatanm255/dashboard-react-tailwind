import React from "react";

function Remiders() {
  return (
    <>
      {/* nav-bar */}
      <section className="bg-white mt-4 rounded-xl p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i class="font-semibold text-slate-800 text-xl bx bx-notepad lg:mb-12"></i>
            <h3 className="text-lg text-slate-800 lg:mb-12">Remiders</h3>
          </div>

          <div className="flex items-center gap-2">
            <i class="font-semibold text-slate-800 text-xl bx bx-left-indent lg:mb-12"></i>
            <i class="font-semibold text-slate-800 text-xl bx bx-book-bookmark lg:mb-12"></i>
          </div>
        </div>
        <hr />

        {/* check */}
        <div>
          <section className="flex justify-between items-center mt-4 bg-gray-200 p-2 rounded-xl border-l-[12px] border-green-600">
            <div className="flex items-center">
              <i class="bx bx-check-circle mr-[5px] text-xl"></i>
              <p className="text-lg">Start Our Meeting</p>
            </div>
            <div>
              <i class="text-xl bx bx-dots-vertical-rounded"></i>
            </div>
          </section>

          <section className="flex justify-between items-center mt-4 bg-gray-200 p-2 rounded-xl border-l-[12px] border-green-600">
            <div className="flex items-center">
              <i class="bx bx-check-circle mr-[5px] text-xl"></i>
              <p className="text-lg">Analyze Our Site</p>
            </div>
            <div>
              <i class="text-xl bx bx-dots-vertical-rounded"></i>
            </div>
          </section>

          <section className="flex justify-between items-center mt-4 bg-gray-200 p-2 rounded-xl border-l-[12px] border-red-600">
            <div className="flex items-center">
              <i class="bx bx-x-circle mr-[5px] text-xl"></i>
              <p className="text-lg">Analyzer the Dashboard</p>
            </div>
            <div>
              <i class="text-xl bx bx-dots-vertical-rounded"></i>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Remiders;
