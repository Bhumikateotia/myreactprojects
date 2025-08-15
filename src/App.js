import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
function App() {
  return (
    <>
  {<Navbar title = "Textutils"/> }
   
   <div className='container'>
    <TextForm heading= "Enter the text to analayze below"/>
   </div>
 {/*<Navbar/>*/}
   </>

    // <>
    // <h1>my name is bhumika teotia</h1>
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with me
    //     </a>
    //   </header>
    // </div>
    // </>
  );
}

export default App;
