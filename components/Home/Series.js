import Image from 'next/image';
import React from 'react'

export const series = [
    {
        "title": "Past & Current Seasons",
        "subTitle":"TV Shows",
        "imageUrl":"https://res.cloudinary.com/adityakmr7/image/upload/v1644419729/01_ptfreb.jpg"
    },
    {
        "title": "New & Classic",
        "subTitle":"Movies",
        "imageUrl":"https://res.cloudinary.com/adityakmr7/image/upload/v1644419729/02_inijjz.jpg"
    },
    {
        "title": "Groundbreaking",
        "subTitle":"TV Shows",
        "imageUrl":"https://res.cloudinary.com/adityakmr7/image/upload/v1644419730/03_jbxkqs.jpg"
    },
    {
        "title": "Add-on",
        "subTitle":"Premiums",
        "imageUrl":"https://res.cloudinary.com/adityakmr7/image/upload/v1644419729/04_una1og.jpg"
    },

]
function Series() {
  return (
    <div className='h-screen bg-black'>
        <div className='text-center'>
        <p className=" text-teal-500 font-bold mb-4">INCLUDE IN ALL PLANS</p>
          <p className="mb-4 font text-lg text-white">All The TV You Love</p>
          <p className="text-center py-12 px-5 text-sm text-white">
            Stream full seasons of exclusive series, current-season episodes,
            hit movies, Hulu Originals, kids shows, and more.
          </p>
        </div>
        <div className="flex justify-between container m-auto space-x-4 ">
          {series.map((item, i) => {
            return (
              <div key={item.title} className="h-96">
                <Image  height={"900"} width="600px" src={item.imageUrl} alt={item.title} />
                <div className="">
                  <p className="text-white ">
                    Past & Current Seasons
                  </p>
                  <p className="text-white"> TV Shows</p>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default Series