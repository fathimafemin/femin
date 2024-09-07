import logo from './logo.svg';
import './App.css';
import New from './components/New';
import Sub from './components/Sub';
import New1 from './components/New1';
import Classcomp from './components/Classcomp';
import Createobj from './components/Createobj';


function App() {
  let a=10;
  let b=15;
  function addnum(){
    return a+b;
  }
  function add(){
    return `${a}+${b}=${a+b}`;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        
        <h2> {addnum()}</h2>
        <h3>{add()}</h3>
        
        <New/>
        <Sub/>
        <New1/>
        <Classcomp/>
        <Createobj/>

      </header>
       
    </div>
  );
}

export default App;
