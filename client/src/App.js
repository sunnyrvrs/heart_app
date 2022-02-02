import Navbar from "./Navbar";
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
