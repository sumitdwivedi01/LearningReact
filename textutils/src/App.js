import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TEXTUtils" aboutText="About TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter Your Text here To Analyze⏬👇 "/>
      </div>
    </>
  );
}

export default App;
