import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import "../src/App.scss"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
