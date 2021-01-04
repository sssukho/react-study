import React from "react";

class App extends React.Component {
  state = {
    isLoading: true
    // movies: []
  };

  componentDidMount() {
    setTimeout(() => { // setTimeout은 react 것이 아니라 javascript 것임.
      this.setState({ isLoading: false });
    }, 5000);
  }

  render() {
    const { isLoading } = this.state;

    return <div>{isLoading ? "Loading..." : "We are ready"} </div>
  }


}

export default App;