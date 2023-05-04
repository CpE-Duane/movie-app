import React, { useEffect } from 'react'
import MovieListing from './../movie-listing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {

     const dispatch = useDispatch()
     const movieText = "Harry"
     const showText = "Friends"

     useEffect(() => {
          try {
               dispatch(fetchAsyncMovies(movieText))
               dispatch(fetchAsyncShows(showText))
               

          } catch (error) {
               console.log(error);
          }

     }, [dispatch])

     return (
          <>
               <div className="banner-img"></div>
               <MovieListing />
          </>
     )
}

export default Home