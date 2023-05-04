import React from 'react'
import "./App.scss"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import MovieDetails from './components/movie-details/MovieDetails';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PageNotFound from './components/page-not-found/PageNotFound';

const App = () => {
     return (
          <>
               <BrowserRouter>
                    <Header />
                    <div className='container'>
                         <Routes>
                              <Route path='/' element={<Home />} />
                              <Route path='/movie/:imdbID' element={<MovieDetails />} />
                              <Route path='*' element={<PageNotFound />} />
                         </Routes>
                    </div>
                    <Footer />
               </BrowserRouter>
          </>
     )
}

export default App