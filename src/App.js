// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="nav">
            <ul className="nav-part-one">
              <li className="nav-item app-name"><a href="/">Textedit</a></li>
              <li className="nav-item nav-link"><a href="/">Home</a></li>
              <li className="nav-item nav-link"><a href="/">About</a></li>
              <li className="nav-item nav-link"><a href="/">Contact</a></li>
            </ul>
          </div>

          <div className="nav-part-two">
            <div><input className="inputs" type="text" name="search" id="input1" /></div>
            <div><input className="inputs" type="button" value="Search" id="input2" /></div>
          </div>

        </div>
      </nav>

      <main className="main">
        <div className="container">
          container
        </div>
      </main>
    </>
  );
}

export default App;
