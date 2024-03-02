// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroScreen1 from "./components/IntroScreen1";
import IntroScreen2 from "./components/IntroScreen2";
import IntroScreen3 from "./components/IntroScreen3";
import IntroScreen4 from "./components/IntroScreen4";
import "./styles.css"; // Make sure to import your styles
import ActivityScreen from "./components/ActivityScreen";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<IntroScreen1 />} />
          <Route path="/introscreen2" element={<IntroScreen2 />} />
          <Route path="/introscreen3" element={<IntroScreen3 />} />
          <Route path="/introscreen4" element={<IntroScreen4 />} />
          <Route path="/activityscreen" element={<ActivityScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
