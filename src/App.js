import "./App.css";
import { HomeScreen } from "./pages/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchResults } from "./pages/SearchResults";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/searchresults" element={<SearchResults />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
