import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
