import Header from "./components/Header/Header";
import Homepage from "./components/Home/Homepage";
import "./App.css";

function App() {
  return (
    <div className="h-full flex flex-col justify-start items-center">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
