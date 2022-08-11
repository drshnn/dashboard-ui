import "./App.scss";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div className="App">
      <section className="main">
        <Sidebar />
        <div className="down-sec">
          <Navbar />
          <Main />
        </div>
      </section>
    </div>
  );
}

export default App;
