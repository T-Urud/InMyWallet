import React from "react";

const MainDashboard = () => {
  return (
    <div>
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-5xl font-semibold">Welcome Theo</h1>
        <span className="text-xl ">What's in your wallet today ? </span>
      </div>
      <div className="dashboard-grid gap-[2%]">
        <div class="bg-blue-500 rounded-xl p-2">70% Width Column</div>
        <div className="flex gap-4 flex-wrap justify-center">
          <div class="bg-red-500 w-[300px] h-[200px] rounded-xl p-2">
            30% Width Column
          </div>
          <div class="bg-red-200 w-[300px] h-[200px] rounded-xl p-2">
            30% Width Column
          </div>
          <div class="bg-red-900 w-[300px] h-[200px] rounded-xl p-2">
            30% Width Column
          </div>
          <div class="bg-blue-100 w-[300px] h-[200px] rounded-xl p-2">
            30% Width Column
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
