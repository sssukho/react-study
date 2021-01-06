import React from "react";
import axios from "axios";
import Movie from "./Movies";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);

    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() { // 이 컴포넌트가 처음 render 됐다는 것을 알려주는 메소드
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return ( 
      <section class="container">
        {isLoading ? (
          <div class="loader"> 
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                />
            ))}
          </div>
        )}
      </section>
    )
  }


}

export default App;