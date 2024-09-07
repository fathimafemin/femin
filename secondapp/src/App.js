import logo from './logo.svg';
import './App.css';
import SimpleMap from './component/SimpleMap';
import Parent from './component/Parent';
import MyMap from './component/MyMap';
import StyleCss from './component/StyleCss';
import Internal from './component/Internal';
import External from './component/External';
import Buttons from './component/Buttons';
import 'bootstrap/dist/css/bootstrap.min.css';//to import the boostap function here

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <SimpleMap/>
      <Parent/>
      <MyMap/>
      <StyleCss/>
      <Internal/>
      <External/>
      <Buttons/>
      
      </header>
    </div>
   
  );
}

export default App;
