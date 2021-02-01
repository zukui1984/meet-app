import logo from './logo.svg';

// import { getEvents, checkToken } from "./api";

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// async componentDidMount() => { 
//   const accessToken =localStorage.getItem("access_token");   
//   const validToken = accessToken !== null  ? awaitcheckToken(accessToken) : false;    
//   this.setState({ tokenCheck: validToken }); 
//      if(validToken === true) this.updateEvents() 
//  const searchParams = newURLSearchParams(window.location.search); 
//  const code = searchParams.get("code");   
//  this.mounted = true;    
//  if (code && this.mounted === true && validToken=== false) {
//      this.setState({tokenCheck:false });   
//         this.updateEvents()
//     } 
//    }

export default App;
