import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../movie-card/MovieCard'
import './movie-listing.scss'
import { getAllShows } from './../../features/movies/movieSlice';
import Slider from 'react-slick'
import { Settings } from '../../common/setting'

const MovieListing = () => {


     const movies = useSelector(getAllMovies)
     const shows = useSelector(getAllShows)

     return (
          <>
               <div className="movie-wrapper">
                    <div className="movie-list">
                         <h2>Movies</h2>
                         <div className="movie-container">
                              <Slider {...Settings}>
                                   {
                                        movies.Response === "True"
                                             ? movies.Search.map((movie, index) => {
                                                  return (
                                                       <MovieCard key={index} data={movie} />
                                                  )
                                             })
                                             : (
                                                  <div className="movies-error">
                                                       <h3>{movies.Error}</h3>
                                                  </div>
                                             )
                                   }
                              </Slider>
                         </div>
                    </div>

                    <div className="show-list">
                         <h2>Shows</h2>
                         <div className="movie-container">
                              <Slider {...Settings}>
                                   {
                                        shows.Response === "True"
                                             ? shows.Search.map((show, index) => {
                                                  return (
                                                       <MovieCard key={index} data={show} />
                                                  )
                                             })
                                             : (
                                                  <div className="movies-error">
                                                       <h3>{shows.Error}</h3>
                                                  </div>
                                             )
                                   }
                              </Slider>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default MovieListing