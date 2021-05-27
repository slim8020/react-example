// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import TodaysPlan from './Components/TodaysPlan';
import MyComponent from './Components/MyComponent';
import PropComponent from './Components/PropsComponent';
import ChildComponent from './Components/ChildComponent';
import BooleanComponent from './Components/BooleanComponent';
import ChildComponent2 from './Components/ChildComponent2';
import DefaultPropsComponent from './Components/DefaultPropsComponent';

class App extends React.Component{
  render(){
    const array = [1,2,3];
    const obj = { name: '제목', age: 30};
    const node = <h1>노드</h1>;
    const func = () => { console.log('메시지');};
    return (
      <div className="body">
          <TodaysPlan/>
          <MyComponent name="Hello"/>
          <PropComponent name="두잇 리액트"/>
          <ChildComponent
            boolValue = {true}
            numValue = {1}
            arrayValue = {array}
            objValue = {obj}
            nodeValue = {node}
            funcValue = {func}
          />
          <div>
            <div><b>지루할 때:</b><BooleanComponent bored/></div>
            <div><b>즐거울 때:</b><BooleanComponent/></div>
          </div>
          <div>
            <ChildComponent2 objValue={{age: 20}} requiredStringValue="문자" />
          </div>
          <DefaultPropsComponent/>
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
