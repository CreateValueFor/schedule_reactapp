import React from 'react';
import Todo from './components/UI/molecules/side/Todo';

// function getTime() {
//   const date = new Date();
//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const day = date.getDay();
//   const minutes = date.getMinutes();
//   const hours = date.getHours();
//   const seconds = date.getSeconds();
// }

function App() {
  // useEffect(() => {
  //   getTime();
  //   setInterval(getTime, 1000);
  // }, []);
  return (
    <div>
      <Todo />
    </div>
  );
}

export default App;
