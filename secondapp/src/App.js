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
import BasicExample from './component/BasicExample';
import Productlist1 from './component/Productlist1';
import Eventhandle from './component/Eventhandle';
import Mycount from './component/Mycount';
import Useeffect from './component/Useeffect';
import Clockhold from './component/Clockhold';
import Todo from './component/Todo';



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
      <BasicExample/>
      <Productlist1/>
      <Eventhandle/>
      <Mycount/>
      <Useeffect/>
     <Clockhold/>
     <Todo/>
    
      </header>
    </div>
   
  );
}

export default App;
