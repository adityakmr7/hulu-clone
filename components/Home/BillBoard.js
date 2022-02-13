import React from 'react'

function BillBoard() {
  return (
    <div className= "h-screen  m-auto bg-zinc-900 pt-8 bg-lightBlack flex flex-col justify-center items-center home__billboardContainer">
      <div className=" w-2/3 container flex justify-center items-center flex-col">
        <p className="text-sm text-emerald-500 uppercase font-bold ">
          HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+
        </p>
        <p className="text-5xl text-white my-3 text-primary">
          Live TV Makes It Better
        </p>
        <p className="text-sm text-white text-primary my-4 ">
          Make the switch from cable. Get 75+ top channels on Hulu with your
          favorite live sports, news, and events - plus the entire Hulu
          streaming library. Access endless entertainment with Disney+ and
          live sports with ESPN+. All three for a new price of $69.99/month.
        </p>
        <p className="text-sm text-white opacity-60">
          8+ only. Regional restrictions, blackouts and Live TV terms apply.
          Access content from each service separately and access ESPN+ content
          via Hulu. Location data required to watch certain content. Offer
          valid for eligible subscribers only.
        </p>
        <a className=" underline opacity-80 text-white text-sm mt-4 cursor-pointer" href="#">
          VIEW CHANNELS IN YOUR AREA
        </a>
      </div>
    </div>
  )
}

export default BillBoard