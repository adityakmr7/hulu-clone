import Image from 'next/image'
import React from 'react'

function MovieThumbnail({data}) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className=' p-2 group cursor-pointer transition duration-200 ease-in transform  sm:hover:scale-105 hover:z-50'>
        <Image
            layout='responsive'
            src={`${BASE_URL}${
                data.backdrop_path ||
                data.poster_path ||
                `${BASE_URL}${data.poster_path}`
              } `}
            height={1080}
            width={1920}
            alt={data.id}
        />
        <div className='p-2'>
            <p  className='truncate max-w-md'>{data.overview}</p>
            <h2>{data.title || data.original_name}</h2>
            <p>{data.media_type}</p>
        </div>
    </div>
  )
}

export default MovieThumbnail