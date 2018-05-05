import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>I am the home component. Hello world</h1>
      <button onClick = { () => console.log('Hi there') } >Click Me</button>
    </div>
  );
};

export default Home;