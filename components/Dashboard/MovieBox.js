import React from 'react'
import MovieThumbnail from './MovieThumbnail'


function MovieBox({data}) {
  return (
    <div className='px-5 grid my-10 sm:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-col-3'>
        {data?.map((item, i) => {
           return (
            <MovieThumbnail
            key={item.id}
            data={item}
            />
           ) 
        })}
       
    </div>
  )
}

export default MovieBox