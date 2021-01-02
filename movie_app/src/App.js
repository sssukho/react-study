import React from "react";

function Food({ fav }) {
  console.log(fav);
  return <h3>I like {fav}!!!</h3>
}

function App() {
  return (
    <div > 
      <h1>Hello!!!!!!!</h1> 
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="쭈꾸미" />
    </div>
  );
}

export default App;
