
import './App.css';
import {useEffect} from "react";
import moviesService from "./Services/movies.service";
import {Route, Routes} from 'react-router-dom';
import Layout from "./Components/Layout/Layout";
import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import TvShopPage from "./Pages/TvShopPage/TvShopPage";
import PeoplePage from "./Pages/PeoplePage/PeoplePage";
import HomePage from "./Pages/HomePage/HomePage";
import MovieDetailsPage from "./Pages/MovieDetailsPage/MovieDetailsPage";
import TvShowDetailsPage from "./Pages/TvShowDetailsPage/TvShowDetailsPage";

function App() {



  return (
    <div>
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path={'movies'} element={<MoviesPage/>}/>
              <Route path={'/movies/:id'} element={<MovieDetailsPage/>}/>
              <Route path={'/tv/:id'} element={<TvShowDetailsPage/>}/>
              <Route path={'tv'} element={<TvShopPage/>}/>
              <Route path={'people'} element={<PeoplePage/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
