import React from 'react'

function HeaderIcon({Icon, title}) {
  return (
    <div className='flex flex-col items-center cursor-pointer w-12 sm:w-20 group'>
        <Icon className="h-8 mb-1 text-white group-hover:animate-bounce"/>
        <p className='opacity-0 text-white hover:opacity-100 tracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderIcon