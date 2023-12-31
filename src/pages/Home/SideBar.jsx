import React from "react";

const SideBar = () => {
  return (
    <div className="bg-custom-blue-gray p-5 min-h-screen text-center">
      <h5 className="font-bold">Sidebar</h5>
      <select className="select select-bordered w-full max-w-xs mt-5">
        <option value="" disabled selected>
          Item 1
        </option>
        <option value="ItemA">Item A</option>
        <option value="ItemB">Item B</option>
      </select>
      <select className="select select-bordered w-full max-w-xs mt-3">
        <option value="" disabled selected>
          Item 2
        </option>
        <option value="ItemA">Item A</option>
        <option value="ItemB">Item B</option>
      </select>
      <select className="select select-bordered w-full max-w-xs mt-3">
        <option value="" disabled selected>
          Item 3
        </option>
        <option value="ItemA">Item A</option>
        <option value="ItemB">Item B</option>
      </select>
    </div>
  );
};

export default SideBar;
