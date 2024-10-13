import React from "react";

const Aside = ({ isVisible }) => {
    return (
        <aside
            id="aside"
            className={`h-auto lg:w-full transition-transform duration-300 transform lg:translate-x-0 xl:rounded-xl ${
                isVisible ? 'translate-y-[4.9%]' : '-translate-y-[120%]'
            } lg:relative lg:top-0 lg:translate-y-0 absolute xl:static xl:mt-4 lg:mt-4 bg-blue-100 w-full lg:rounded-xl lg:p-5 shadow-lg top-[60px]`}
        >
            <div>
                <ul className="text-slate-800 text-lg grid gap-1 cursor-pointer">
                    <li className="hover:bg-blue-200 p-2 rounded-lg">
                        <i className='mr-3 ml-2 text-xl bx bxs-dashboard'></i>Dashboard
                    </li>
                    <li className="hover:bg-blue-200 p-2 rounded-lg">
                        <i className='mr-3 ml-2 text-xl bx bxs-building'></i>Building
                    </li>
                    <li className="hover:bg-blue-200 p-2 rounded-lg">
                        <i className='mr-3 ml-2 text-xl bx bxs-store'></i>Market
                    </li>
                    <li className="hover:bg-blue-200 p-2 rounded-lg">
                        <i className='mr-3 ml-2 text-xl bx bx-line-chart'></i>Analytics
                    </li>
                    <li className="hover:bg-blue-200 p-2 rounded-lg">
                        <i className='mr-3 ml-2 text-xl bx bx-task'></i>Trading Orders
                    </li>
                    <li className="hover:bg-blue-200 p-2 rounded-lg">
                        <i className='mr-3 ml-2 text-xl bx bx-book'></i>Orders Sales
                    </li>
                    <li className="hover:bg-blue-200 p-2 rounded-lg">
                        <i className='mr-3 ml-2 bx bx-spreadsheet'></i>Recent Orders
                    </li>
                </ul>
            </div>

            <div className="my-4">
                <ul>
                    <li className="cursor-pointer hover:bg-red-300 p-2 text-red-600 text-lg flex items-center rounded-lg">
                        <i className='text-xl flex items-center mr-3 ml-2 bx bx-log-out-circle'></i>Logout
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Aside;
