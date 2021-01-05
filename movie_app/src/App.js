import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true
    // movies: []
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  componentDidMount() { // 이 컴포넌트가 처음 render 됐다는 것을 알려주는 메소드
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;

    return <div>{isLoading ? "Loading..." : "We are ready"} </div>
  }


}

export default App;