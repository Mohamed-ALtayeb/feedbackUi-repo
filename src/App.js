import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
// import FeedbackData from "./Data/FeedbackData.jsx";
import FeedbackList from "./components/FeedbackList/FeedbackList";
import FeedbackStats from "./components/FeedbackStats/FeedbackStats";
import FeedbackFrom from "./components/FeedbackFrom/FeedbackFrom";
import About from "./components/pages/About/About";
import AboutLink from "./components/pages/About/AboutLink";
import { FeedbackProvider } from "./components/FeedbackContext/FeedbackContext";
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackFrom />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
          <AboutLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
