import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Country from "./pages/Country";
import Store from "./pages/Store";
import Budget from "./pages/Budget";
import Preferences from "./pages/Preferences";
import Result from "./pages/Result";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country" element={<Country />} />
      <Route path="/store" element={<Store />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/preferences" element={<Preferences />} />
      <Route path="/result" element={<Result />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/settings" element={<Settings />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App; 