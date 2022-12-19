import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CustomFilters from './components/CustomFilters';
import IGShowFilters from './components/IGShowFilters';
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import Booster from "./pages/Booster";
import Hero from "./pages/Hero";
import HomePage from "./pages/HomePage";
import PhotoEdit from "./pages/PhotoEdit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="photo-edit" element={<PhotoEdit />}>
          <Route path="sidebar"  element={<Sidebar />} />
          <Route path="igfilters"  element={<IGShowFilters />} />
          <Route path="custom"  element={<CustomFilters />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
