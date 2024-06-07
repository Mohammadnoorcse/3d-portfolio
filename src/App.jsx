
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import HomePage from "./components/Home/HomePage";
const App = () => {
  return (
  <>
   <Router>
  

      <Routes>
        
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  </>
  )
}

export default App