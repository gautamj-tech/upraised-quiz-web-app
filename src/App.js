import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Result from "./pages/Result";
import axiosInstance from "./axiosConfig";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [listSet, setListSet] = useState([]);
  const [showFinalResults, setshowFinalResults] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/");
        setListSet(response?.data?.questions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="font-nunito">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/questions"
          element={
            <Questions
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              questions={listSet}
              score={score}
              setScore={setScore}
              showFinalResults={showFinalResults}
              setshowFinalResults={setshowFinalResults}
            />
          }
        />

        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
