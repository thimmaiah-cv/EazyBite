import { ChartColumn, IndianRupee, ShoppingBag, Users } from "lucide-react";
import React from "react";

export default function DashboardContent() {
  return (
    <div className="w-full flex flex-col mt-5">
      <div className="flex gap-5 justify-between">
        <div className="flex flex-col bg-white border-2 border-[#E5E5E5] rounded-[20px] w-full px-4 py-5">
          <span className="font-raleway font-semibold text-xl flex items-center justify-between text-[#1F2932]">
            Today's Orders
            <ShoppingBag size={24} color="#717182" />
          </span>
          <span className="font-roboto font-bold text-4xl mt-7 text-[#1F2932]">
            2
          </span>
          <span className="font-raleway font-medium text-[#717182] text-base mt-0.5">
            Orders placed today
          </span>
        </div>
        <div className="flex flex-col bg-white border-2 border-[#E5E5E5] rounded-[20px] w-full px-4 py-5">
          <span className="font-raleway font-semibold text-xl flex items-center justify-between text-[#1F2932]">
            Today's Revenue
            <IndianRupee size={24} color="#717182" />
          </span>
          <span className="font-roboto font-bold text-4xl mt-7 text-[#1F2932]">
            ₹ 54.45
          </span>
          <span className="font-raleway font-medium text-[#717182] text-base mt-0.5">
            Revenue generated today
          </span>
        </div>
        <div className="flex flex-col bg-white border-2 border-[#E5E5E5] rounded-[20px] w-full px-4 py-5">
          <span className="font-raleway font-semibold text-xl flex items-center justify-between text-[#1F2932]">
            Table Occupancy
            <Users size={24} color="#717182" />
          </span>
          <span className="font-roboto font-bold text-4xl mt-7 text-[#1F2932]">
            20.0%
          </span>
          <span className="font-raleway font-medium text-[#717182] text-base mt-0.5">
            <span className="font-roboto font-normal">2 of 10</span> tables
            occupied
          </span>
        </div>
        <div className="flex flex-col bg-white border-2 border-[#E5E5E5] rounded-[20px] w-full px-4 py-5">
          <span className="font-raleway font-semibold text-xl flex items-center justify-between text-[#1F2932]">
            Menu Items
            <ChartColumn size={24} color="#717182" />
          </span>
          <span className="font-roboto font-bold text-4xl mt-7 text-[#1F2932]">
            5
          </span>
          <span className="font-raleway font-medium text-[#717182] text-base mt-0.5">
            <span className="font-roboto font-normal">5</span> available
          </span>
        </div>
      </div>

      {/*  */}

      <div className="grid grid-cols-2 mt-5 gap-5">
        <div className="flex flex-col bg-white border-2 border-[#E5E5E5] rounded-[20px] h-full w-full px-4 py-5">
          <span className="block font-raleway font-medium text-xl text-[#1F2932]">
            Popular Items
          </span>
        </div>
        <div className="flex flex-col bg-white border-2 border-[#E5E5E5] rounded-[20px] h-full w-full px-4 py-5">
          <span className="block font-raleway font-medium text-xl text-[#1F2932]">
            Recent Orders
          </span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione odit
          sint consequuntur a pariatur consequatur ex quae voluptas eveniet
          animi explicabo illo, eaque totam vitae error tempore, dicta aliquid
          provident.
        </div>
      </div>

      {/*  */}
    </div>
  );
}
