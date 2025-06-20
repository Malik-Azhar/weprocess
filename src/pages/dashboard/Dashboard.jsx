import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PlusSVG from "../../components/icons/PlusSVG";
import CustomBarChart from "./CustomBarChart";
import DoughnutChart from "./DoughnutChart";

const Dashboard = () => {
  const { setHeaderContent } = useOutletContext();

  useEffect(() => {
    setHeaderContent(
      <div className="flex justify-between w-full">
        <h1 className="text-[40px] font-bold text-white tracking-[0]">Good Morning, Andrew!</h1>
        <button className="bg-[#AE8119] min-h-14 min-w-[250px] flex items-center justify-center gap-2 rounded-[16px] text-white text-[16px] font-bold cursor-pointer">
          <PlusSVG classes="size-4" />
          <span>New instruction</span>
        </button>
      </div>
    );
  }, []);

  return (
    <div className="grid grid-cols-[65%_33%] gap-6 box-border">
      {/* left side */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-6">
          <div className="card_box flex-[1_1_330px] flex flex-col gap-12">
            <div className="flex flex-col">
              <h3 className="card_heading_text">Total Instructions</h3>
              <p className="card_text">Count of the instructions created</p>
            </div>

            <div className="flex items-center gap-4">
              <h3 className="text-[#043F35] text-5xl font-bold">250</h3>
              <span className="text-[#0F800A] text-[16px] font-bold bg-[#DEFFE4] px-3 rounded-[20px]">27 this month</span>
            </div>
          </div>
          <div className="card_box flex-[1_1_330px] flex flex-col gap-12">
            <div className="flex flex-col">
              <h3 className="card_heading_text">Instructions In Progress</h3>
              <p className="card_text">Total count of in progress instructions</p>
            </div>

            <div className="flex items-center gap-4">
              <h3 className="text-[#043F35] text-5xl font-bold">7</h3>
              <span className="text-[#B71C1C] text-[16px] font-bold bg-[#FFEAEA] px-3 rounded-[20px]">4 urgent</span>
            </div>
          </div>
          <div className="card_box flex-[1_1_330px] flex flex-col gap-12">
            <div className="flex flex-col">
              <h3 className="card_heading_text">Instructions Completed</h3>
              <p className="card_text">Instructions completed this month</p>
            </div>

            <div className="flex items-center gap-4">
              <h3 className="text-[#043F35] text-5xl font-bold">50</h3>
              <span className="text-[#B71C1C] text-[16px] font-bold bg-[#FFEAEA] px-3 rounded-[20px]">5 with pending invoices</span>
            </div>
          </div>
        </div>

        <div className="card_box">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex flex-col">
              <h3 className="card_heading_text">Instructions In Progress</h3>
              <p className="card_text">Monthly instructions requested by firm</p>
            </div>

            <div className="flex items-center">
              <button type="button" className="min-h-9 px-3 text-[#656565] text-[14px] font-normal border-b-2 border-white">New Requests</button>
              <button type="button" className="min-h-9 px-3 text-[#126456] text-[14px] font-normal border-b-2 border-[#126456]">New In Progress</button>
              <button type="button" className="min-h-9 px-3 text-[#656565] text-[14px] font-normal border-b-2 border-white">New Completed</button>
              <button type="button" className="min-h-9 px-3 text-[#656565] text-[14px] font-normal border-b-2 border-white">New Invoices</button>
            </div>
          </div>

          <div className="overflow-x-scroll mt-6">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="bg-[#F5F5F5] px-4 py-3 text-start text-[#656565] text-[16px] font-normal whitespace-nowrap rounded-l-[20px]">WPR no.</th>
                  <th className="bg-[#F5F5F5] px-4 py-3 text-start text-[#656565] text-[16px] font-normal whitespace-nowrap">Owner</th>
                  <th className="bg-[#F5F5F5] px-4 py-3 text-start text-[#656565] text-[16px] font-normal whitespace-nowrap">Serve name</th>
                  <th className="bg-[#F5F5F5] px-4 py-3 text-start text-[#656565] text-[16px] font-normal whitespace-nowrap">Court name</th>
                  <th className="bg-[#F5F5F5] px-4 py-3 text-start text-[#656565] text-[16px] font-normal whitespace-nowrap">Service type</th>
                  <th className="bg-[#F5F5F5] px-4 py-3 text-start text-[#656565] text-[16px] font-normal whitespace-nowrap">Deadline</th>
                  <th className="bg-[#F5F5F5] px-4 py-3 text-start text-[#656565] text-[16px] font-normal whitespace-nowrap rounded-r-[20px]">Process status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-white px-4 py-6 text-[#656565] text-[16px] font-normal">5102</td>
                  <td className="bg-white px-4 py-6 text-[#656565] text-[16px] font-normal">Andrew Garfield</td>
                  <td className="bg-white px-4 py-6 text-[#656565] text-[16px] font-normal">Serve name</td>
                  <td className="bg-white px-4 py-6 text-[#656565] text-[16px] font-normal">Court A</td>
                  <td className="bg-white px-4 py-6 text-[#656565] text-[16px] font-normal">Urgent</td>
                  <td className="bg-white px-4 py-6 text-[#656565] text-[16px] font-normal">11/11/2022</td>
                  <td className="bg-white px-4 py-6 text-[#656565] text-[16px] font-normal">
                    <span className="bg-[#D4F8D3] rounded-md min-h-[30px] text-[#008000] text-[16px] font-medium px-2">1st attempt</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-col gap-6">
        <div className="card_box">
          <div className="flex items-center justify-between">

            <div className="flex flex-col">
              <h3 className="card_heading_text">Instructions requested</h3>
              <p className="card_text">Monthly instructions requested by firm</p>
            </div>

            <QuantityDropdown />
          </div>
          <div>
            <CustomBarChart />
          </div>
        </div>
        
        <div className="card_box">
          <div className="flex items-center justify-between">

            <div className="flex flex-col">
              <h3 className="card_heading_text">Instructions requested</h3>
              <p className="card_text">Monthly instructions requested by firm</p>
            </div>

            <QuantityDropdown />

          </div>

          <div>
            <DoughnutChart />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;

const QuantityDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-[24px] bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-2 ring-[#E5E5E5] ring-inset hover:bg-gray-50 cursor-pointer"
          id="menu-button"
          aria-expanded={open}
          aria-haspopup="true"
        >
          Quantity
          <svg
            className={`-mr-1 size-5 text-gray-400 transform transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      <div
        className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none transform transition-all ${
          open
            ? "scale-100 opacity-100 duration-100 ease-out"
            : "scale-95 opacity-0 pointer-events-none duration-75 ease-in"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
            Account settings
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
            Support
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
            License
          </a>
          <form method="POST" action="#" role="none">
            <button
              type="submit"
              className="block w-full px-4 py-2 text-left text-sm text-gray-700"
              role="menuitem"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
