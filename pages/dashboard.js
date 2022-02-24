import React from 'react'
import MovieBox from '../components/Dashboard/MovieBox'
import NavBar from '../components/Dashboard/NavBar'
import NaviIconBar from '../components/Dashboard/NaviIconBar'

function dashboard({data}) {
  return (
    <div className='bg-main text-white'>

      <NaviIconBar/>
      <NavBar/>
      <MovieBox data={data}/>
    </div>
  )
}


export default dashboard
export async function getServerSideProps(context) {
  const genre = context.query?.genre
  let genreTitle = '';
  if(genre) {
    genreTitle = genre.replace(' ', '-').toLowerCase();

  }
  const url = `http://localhost:3000/api/movie?category=${genreTitle}`;
  const request = await fetch(url);
  const parseJson= await request.json();
  return {
    props: {
      data: parseJson?.data?.results
    }
  }

}
