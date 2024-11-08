import React, { useEffect, useState } from "react";
import _  from 'lodash'   // lodash - library

import "./Movielist.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({type, title, emoji}) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([])   
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({by:"default", order:"asc"})   
  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if(sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order])  
      setFilterMovies(sortedMovies)
    }
  }, [sort])

  const fetchMovies = async () => {
    try{
    const response = await fetch(
      
      'https://api.themoviedb.org/3/movie/top_rated?api_key=8a332b843862f926b3659ed23d870b82&language=en-US&page=1'  
    );
    const data = await response.json();
     
     if (data.results && Array.isArray(data.results)) {
        setMovies(data.results);
        setFilterMovies(data.results);
      } else {
        console.error("Unexpected data structure:", data);
        setMovies([]); 
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]); 
    }
   
  };

  const handleFilter = rate => {
    setMinRating(rate)

    const filter = movies.filter(movie => movie.vote_average >= rate)
    setFilterMovies(filter);
  }

  const handleSort = e => {
    const {name, value} = e.target;
    setSort((prev) => ({...prev, [name]: value}))  
    //console.log(sort);
  }
 
  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        {" "}
        
        <h2 className="align_center movie_list_heading"> {title} {" "}  
          
          <img src={emoji} alt={'${emoji} icon'} className="navbar_emoji" />
        </h2>
        <div className="align_center movie_list_fs">
         
          <FilterGroup minRating={minRating} onRatingClick={handleFilter} ratings={[8,7,6]}/>

          <select name="by" id="" onChange={handleSort} value={sort.by} className="movie_sorting">
            <option value="default">sort by</option>
            <option value="release_date">date</option>
            <option value="vote_average">rating</option>
          </select>
          <select name="order" id="" onChange={handleSort} value={sort.order} className="movie_sorting">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div className="movie_cards">
          
          {movies.length > 0 ? (
            filterMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ):(
            <p>No movies found.</p> 
        )}
        </div>
      </header>
    </section>
  );
};

export default MovieList;