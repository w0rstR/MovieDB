
import './App.css';
import {useEffect} from "react";
import moviesService from "./Services/movies.service";
import {Route, Routes} from 'react-router-dom';
import Layout from "./Components/Layout/Layout";
import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import TvShopPage from "./Pages/TvShopPage/TvShopPage";
import PeoplePage from "./Pages/PeoplePage/PeoplePage";

function App() {

  useEffect(()=>{
      moviesService.getAllPopular().then(value => console.log(value))
  })

  return (
    <div>
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route path={'movies'} element={<MoviesPage/>}/>
              <Route path={'tv'} element={<TvShopPage/>}/>
              <Route path={'people'} element={<PeoplePage/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
