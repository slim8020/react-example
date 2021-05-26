// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import TodaysPlan from './TodaysPlan';
import MyComponent from './MyComponent';
import PropComponent from './PropsComponent';

class App extends React.Component{
  render(){
    return (
      <div className="body">
          <TodaysPlan/>
          <MyComponent name="Hello"/>
          <PropComponent name="두잇 리액트"/>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
