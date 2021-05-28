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
import ChildProperty from './Components/ChildProperty';
import StateExample from './Components/StateExample';
import Subject from './Components/Subject';
import Toc from './Components/TOC';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      subject: {title: '헬로로로', subtitle:'World Wide Web'},
      welcome: {title:'Welcome', subtitle:'Hello React!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for Design'},
        {id:3, title:'Javascript', desc:'Javascript is for interactive'}
      ]
    }
  }

  render(){
    const array = [1,2,3];
    const obj = { name: '제목', age: 30};
    const node = <h1>노드</h1>;
    const func = () => { console.log('메시지');};

    var _title, _subtitle = null;

    if(this.state.mode === 'welcome'){
        _title = this.state.welcome.title;
        _subtitle = this.state.welcome.subtitle;
    }
    else{
      _title = this.state.subject.title;
      _subtitle = this.state.subject.subtitle;
    }

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
{/* 
          <ChildProperty>
            <div><span>자식노드</span></div>
          </ChildProperty> */}

          <ChildProperty children={<div><span>자식노드</span></div>}/>

          <div>
            <StateExample/>
          </div>

          <Subject title={_title} subtitle={_subtitle}/>
          <Toc data={this.state.contents}/>
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
