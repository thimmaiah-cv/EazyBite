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
          <div className="flex flex-col gap-y-3 mt-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="bg-[#1F2932] flex justify-center items-center text-white font-roboto font-semibold text-xl h-10 w-10 text-center rounded-full">
                  1
                </span>
                <div className="flex flex-col">
                  <span className="text-[#1F2932] font-raleway font-semibold text-[17px]">
                    Caesar Salad
                  </span>
                  <span className="text-[#717182] font-roboto font-normal text-[15px]">
                    ₹ 8.99
                  </span>
                </div>
              </div>
              <span className="text-[#272744] text-lg font-raleway font-medium bg-[#ECEEF2] rounded-[10px] px-2.5 py-1">
                <span className="font-roboto font-normal">2</span> orders
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="bg-[#1F2932] flex justify-center items-center text-white font-roboto font-semibold text-xl h-10 w-10 text-center rounded-full">
                  2
                </span>
                <div className="flex flex-col">
                  <span className="text-[#1F2932] font-raleway font-semibold text-[17px]">
                    Coca Cola
                  </span>
                  <span className="text-[#717182] font-roboto font-normal text-[15px]">
                    ₹ 2.50
                  </span>
                </div>
              </div>
              <span className="text-[#272744] text-lg font-raleway font-medium bg-[#ECEEF2] rounded-[10px] px-2.5 py-1">
                <span className="font-roboto font-normal">2</span> orders
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="bg-[#1F2932] flex justify-center items-center text-white font-roboto font-semibold text-xl h-10 w-10 text-center rounded-full">
                  3
                </span>
                <div className="flex flex-col">
                  <span className="text-[#1F2932] font-raleway font-semibold text-[17px]">
                    Margherita Pizza
                  </span>
                  <span className="text-[#717182] font-roboto font-normal text-[15px]">
                    ₹ 12.99
                  </span>
                </div>
              </div>
              <span className="text-[#272744] text-lg font-raleway font-medium bg-[#ECEEF2] rounded-[10px] px-2.5 py-1">
                <span className="font-roboto font-normal">1</span> orders
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="bg-[#1F2932] flex justify-center items-center text-white font-roboto font-semibold text-xl h-10 w-10 text-center rounded-full">
                  4
                </span>
                <div className="flex flex-col">
                  <span className="text-[#1F2932] font-raleway font-semibold text-[17px]">
                    Chicken Burger
                  </span>
                  <span className="text-[#717182] font-roboto font-normal text-[15px]">
                    ₹ 15.99
                  </span>
                </div>
              </div>
              <span className="text-[#272744] text-lg font-raleway font-medium bg-[#ECEEF2] rounded-[10px] px-2.5 py-1">
                <span className="font-roboto font-normal">1</span> orders
              </span>
            </div>
          </div>
        </div>

        {/*  */}
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
