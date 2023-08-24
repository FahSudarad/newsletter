import "./App.css";
import NewsletterPage from "../src/components/NewsletterPage.jsx";
import SubmitPage from "../src/components/SubmitPage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewsletterPage />} />
        <Route path="/submit-success" element={<SubmitPage />} />
      </Routes>
    </Router>
  );
}

export default App;
