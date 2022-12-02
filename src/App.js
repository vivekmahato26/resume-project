import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Template from "./pages/template";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/template/:templateId" element={<Template/>}/>
      </Routes>
    </div>
  );
}

export default App;
