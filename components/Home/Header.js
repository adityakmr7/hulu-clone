import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="h-screen w-full">
      <div className="m-auto home__wrappper">
        <nav className=" container margin-auto flex justify-between pt-4 items-center">
          <div />
          <Link passHref href={"/dashboard"} className="text-lg font-mono text-white">
             <p className="text-white cursor-pointer"> Login</p>
          </Link>
        </nav>
        <div className="flex flex-col mt-40 justify-center items-center">
          <p className="text-white">BUNDLE WITH ANY HULU PLAN</p>
          <Image
            src={
              "https://res.cloudinary.com/adityakmr7/image/upload/v1644332522/bandname_geiakr.png"
            }
            alt="brand"
            width={600}
            height={100}
          />
          <p className="text-white">
            Get endless entertainment, live sports, and the shows and movies you
            love.
          </p>
          <button className="bg-slate-50 py-4 px-6  text-black my-10">
            GET THE DISNEY BUNDLE
          </button>
          <p className=" text-slate-200 ">
            <a href="#">What &apos;s included ?</a> See <a>Bundle terms.</a>
          </p>
          <a href="#" className=" text-white">
            Sign up for Hulu only
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
