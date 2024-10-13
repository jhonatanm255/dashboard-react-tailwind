import React from "react";
import persona1 from "../imagenes/persona1.png"
import persona2 from "../imagenes/persona2.jpg";
import persona3 from "../imagenes/persona3.jpg";

function RecentOrders(){
    return (
      <>
        {/* nav-bar */}
        <section className="bg-white mt-4 rounded-xl p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <i class="font-semibold text-slate-800 text-xl bx bx-receipt"></i>
              <h3 className="text-lg text-slate-800">Recent Orders</h3>
            </div>

            <div className="flex items-center gap-2">
              <i class="font-semibold text-slate-800 text-xl bx bx-calendar-week"></i>
              <i class="font-semibold text-slate-800 text-xl bx bx-search-alt-2"></i>
            </div>
          </div>

          {/* titulos */}
          <div className="text-slate-700 flex items-center justify-between my-3">
            <p>User</p>
            <p>Order Date</p>
            <p>Status</p>
          </div>
          <hr />

          {/* ordenes */}
          <div>
            {/* persona 1 */}
            <section className="flex justify-between mt-6">
              <div className="flex items-center gap-2">
                <img
                  className="w-12 h-12 center object-contain rounded-full"
                  src={persona1}
                  alt="persona-1"
                />
                <h3 className="flex items-center text-lg font-semibold">
                  Diana Rondon
                </h3>
              </div>

              <p className="flex items-center">08-10-2024</p>
              <span className="h-8 my-auto flex items-center bg-green-300 px-4 rounded-full text-green-800">
                Completed
              </span>
            </section>

            {/* persona 2 */}
            <section className="flex justify-between mt-6">
              <div className="flex items-center gap-2">
                <img
                  className="w-12 h-12 center object-contain rounded-full"
                  src={persona2}
                  alt="persona-1"
                />
                <h3 className="flex items-center text-lg font-semibold">
                  Frank Martin
                </h3>
              </div>
              <p className="flex items-center">19-12-2024</p>
              <span className="h-8 my-auto flex items-center bg-yellow-300 px-4 rounded-full text-yellow-800">
                Pending
              </span>
            </section>

            {/* persona 3 */}
            <section className="flex justify-between mt-6">
              <div className="flex items-center gap-2">
                <img
                  className="w-12 h-12 center object-contain rounded-full"
                  src={persona3}
                  alt="persona-1"
                />
                <h3 className="flex items-center text-lg font-semibold">
                  Sofia Muñoz
                </h3>
              </div>
              <p className="flex items-center">04-05-2024</p>
              <span className="flex items-center bg-blue-300 px-4 h-8 my-auto rounded-full text-blue-800">
                Processing
              </span>
            </section>
          </div>
        </section>
      </>
    );
};

export default RecentOrders;  