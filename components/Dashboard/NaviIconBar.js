import React from 'react'
import HeaderIcon from './HeaderIcon'
import {
    HomeIcon,
    LightBulbIcon,
    BadgeCheckIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon,
  } from "@heroicons/react/outline";
import Image from 'next/image';

function NaviIconBar() {
  return (
    <header className='flex sm:flex-row flex-col  items-center justify-between'>
        <div className='flex flex-grow max-w-2xl items-center'>

        <HeaderIcon title="HOME" Icon={HomeIcon} />

        <HeaderIcon title={"TRENDING"} Icon={LightBulbIcon}/>
        <HeaderIcon title={"VERIFIED"} Icon={BadgeCheckIcon}/>
        <HeaderIcon title={"SEARCH"} Icon={SearchIcon}/>
        <HeaderIcon title={"ACCOUNT"} Icon={UserIcon}/>

        </div>
        <Image
        src="https://res.cloudinary.com/adityakmr7/image/upload/v1645335353/hulu-white_1_vaw4ci.png"
        width={200}
        height={100}
        alt="logo"
        className="object-contain"
      />

    </header>
  )
}

export default NaviIconBar