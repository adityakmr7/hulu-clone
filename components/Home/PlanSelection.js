import React, { useState } from "react";

import { Switch } from "@headlessui/react";
const plan = [
  {
    id: 1,
    planName: "Streaming Library with thousands of TV episodes and movies",
    hulu: true,
    huluNoAdd: true,
    huluLive: true,
  },
  {
    id: 2,
    planName: "Most new episodes the day after they air^",
    hulu: true,
    huluNoAdd: true,
    huluLive: true,
  },
  {
    id: 2,
    planName: "Access to award-winning Hulu Originals",
    hulu: true,
    huluNoAdd: true,
    huluLive: true,
  },
  {
    id: 3,
    planName: "Watch on your TV, laptop, phone, or tablet",
    hulu: true,
    huluNoAdd: true,
    huluLive: true,
  },
  {
    id: 4,
    planName: "Up to 6 user profiles",
    hulu: true,
    huluNoAdd: true,
    huluLive: true,
  },
  {
    id: 5,
    planName: "Watch on 2 different screens at the same time",
    hulu: true,
    huluNoAdd: true,
    huluLive: true,
  },
  {
    id: 6,
    planName: "No ads in streaming library",
    hulu: false,
    huluNoAdd: true,
    huluLive: false,
  },
  {
    id: 7,
    planName: "No ads in streaming library",
    hulu: false,
    huluNoAdd: true,
    huluLive: false,
  },
  {
    id: 8,
    planName: "Download and watch",
    hulu: false,
    huluNoAdd: true,
    huluLive: false,
  },
  {
    id: 9,
    planName: "Live TV with 75+ top channels. No cable required.",
    hulu: false,
    huluNoAdd: true,
    huluLive: false,
  },
  {
    id: 10,
    planName: "Live TV guide to navigate channels",
    hulu: false,
    huluNoAdd: true,
    huluLive: false,
  },
  {
    id: 11,
    planName: "Record Live TV with 50 hours of Cloud DVR storage",
    hulu: false,
    huluNoAdd: false,
    huluLive: true,
  },
  {
    id: 12,
    planName: "Endless enterainment with Disnet+, ad-free",
    hulu: false,
    huluNoAdd: false,
    huluLive: true,
  },
  {
    id: 13,
    planName: "Live sports with ESPN+, now on Hulu",
    hulu: false,
    huluNoAdd: false,
    huluLive: true,
  },
];

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};

function PlanSection() {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="mt-10 text-black bg-white m-auto h-screen   flex flex-col justify-center items-center">
      <p className="text-6xl font-bold text-black">Select Your Plan</p>
      <p className=" mt-3 text-black">
        No hidden fees, equipment rentals, or installation appointments.{" "}
      </p>
      <p className="text-black my-2 font-bold">
        Switch plans or cancel anytime.^^
      </p>
      <div className="justify-between w-8/12 flex flex-row items-center">
        <div className="">
          <p className="text-black font-bold text-3xl">Bundle & Save</p>
          <p className="text-black ">
            Includes Hulu(plan of your choice), <br /> Disney+, and ESPN+
          </p>
          <Switch
            className={`${
              isToggle ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex items-center h-6 rounded-full w-11`}
            checked={isToggle}
            onChange={setIsToggle}
          >
            <span
              className={`${
                isToggle ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>
        </div>

        <div className="flex flex-row justify-between items-center w-3/6">
          <div className="bundle__list_row">
            {/* <div>
                <p>Most Popular</p>
              </div> */}
            <p>30 DAY FREE TRAIL</p>
            <p>Hulu</p>
            <button className="bg-black py-3 px-8 text-white">SELECT</button>
          </div>
          <div className="bundle__list_row">
            <p>30 DAY FREE TRAIL</p>
            <p>Hulu(No Ads)</p>
            <button className="bg-black py-3 px-8 text-white">SELECT</button>
          </div>
          <div className="bundle__list_row">
            <p>DISNEY+, ESPN+</p>
            <p>Hulu + Live TV</p>
            <button className="bg-black py-3 px-8 text-white">SELECT</button>
          </div>
        </div>
      </div>
      <div className=" my-4 w-8/12 h-0 bg-slate-300 " />
      <div className="flex  flex-row justify-between w-8/12 ">
        <div className=" w-4/12">
          <p>Monthly price</p>
        </div>
        <div>
          <p>$6.99/mo</p>
        </div>
        <div>
          <p>$12.99/mo</p>
        </div>
        <div>
          <p>$69.99/mo</p>
        </div>
      </div>
      <div className="w-8/12 h-96 my-6 no-scrollbar  overflow-y-scroll">
        {plan.map((item, i) => {
          return (
            <div
              key={item.id}
              className="flex my-6  flex-row justify-between  "
            >
              <div className="w-4/12">
                <p>{item.planName}</p>
              </div>
              <div>
                {item.hulu ? (
                  <CheckIcon />
                ) : (
                  <div className="dash bg-slate-300 w-px h-px" />
                )}
              </div>
              <div>
                {item.huluNoAdd ? (
                  <CheckIcon />
                ) : (
                  <div className="dash bg-slate-300 w-px h-px" />
                )}
              </div>
              <div>
                {item.huluLive ? (
                  <CheckIcon />
                ) : (
                  <div className="dash bg-slate-300 w-px h-px" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlanSection;
