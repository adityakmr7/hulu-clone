import { useRouter } from "next/router";
import React from "react";

const data = [
  { id: 1, title: "TRENDING" },
  {
    id: 2,
    title: "TOP RATED",
  },
  {
    id: 3,
    title: "ACTION",
  },
  {
    id: 4,
    title: "COMEDY",
  },
];

function NavBar() {
    const router = useRouter();

  return <div>

      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap scrollbar-hide space-x-10 sm:space-x-20 overflow-x-scroll">
        {data.map((nav,i) => {
            return (
                <h2 
                onClick={() => router.push(`dashboard/?genre=${nav.title}`)}
                key={nav.id}
                className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white"
                >
                    {nav.title}
                </h2>
            )
        })}
      </div>
  </div>;
}

export default NavBar;
