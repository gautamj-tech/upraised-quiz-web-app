import React, { useState } from "react";
import bgImg from "../assets/images/question-img.png";
import Result from "./Result";
import { BsArrowRightShort } from "react-icons/bs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Checkmark } from "react-checkmark";

const Questions = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  score,
  setScore,
  showFinalResults,
  setshowFinalResults,
}) => {
  const [clickedOption, setClickedOption] = useState(0);
  const [showSelectionError, setShowSelectionError] = useState(false);

  function nextHandler() {
    if (!clickedOption) {
      setShowSelectionError(true);
      return;
    }
    setShowSelectionError(false);
    updateScore();
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setshowFinalResults(true);
    }
  }

  function updateScore() {
    if (clickedOption.toString() === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  }

  return (
    <div>
      {showFinalResults ? (
        <Result
          score={score}
          questions={questions}
          setCurrentQuestion={setCurrentQuestion}
          setshowFinalResults={setshowFinalResults}
          setScore={setScore}
        />
      ) : (
        <div className="bg-[#AF9CF3]">
          <div>
            <img src={bgImg} alt="bg-img" />
          </div>
          <div className="bg-white mt-[19px] flex flex-col items-center rounded-[40px] h-[1000px]">
            <div className="relative">
              <div className="w-20 h-20 absolute top-[-40px] left-1 p-1">
                <CircularProgressbar
                  className="bg-transparent text-green-400"
                  value={currentQuestion + 1}
                  maxValue={questions.length}
                  styles={buildStyles({
                    pathColor: "#44B77B",
                  })}
                />
              </div>
              <h1 className="text-[32px] font-extrabold italic font-nunito bg-white w-[100px] h-[100px] mx-auto rounded-full mt-[-42px] p-5  text-center">
                {currentQuestion + 1}
                <span className="text-[17px] text-slate-500">
                  /{questions.length}
                </span>
              </h1>
            </div>
            <h2 className="text-[22px] font-bold mt-2 px-5 text-left">
              {questions[currentQuestion]?.question}
            </h2>
            <div className="mt-8">
              <ul className="relative ml-10 flex flex-col gap-5 justify-left mr-5">
                {questions[currentQuestion]?.options.map((option, i) => {
                  return (
                    <div className="flex flex-col" key={option.id}>
                      <button
                        className={`${
                          clickedOption === i + 1
                            ? " bg-white flex flex-row h-full w-[300px] -ml-4 border-[#44B77B] rounded-lg text-left p-8 text-sm"
                            : "bg-[#F3F4FA] flex flex-row h-full w-[300px] -ml-4 border-[#44B77B] rounded-lg text-left p-8 text-sm"
                        }`}
                        onClick={() => {
                          setClickedOption(i + 1);
                        }}
                      >
                        <div className="mr-4 ">
                          {clickedOption === i + 1 ? (
                            <Checkmark color="#35D299" size="25px" />
                          ) : (
                            <Checkmark color="white" size="25px" />
                          )}
                        </div>
                        {option?.text}
                      </button>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col gapy-y-2">
              {showSelectionError && (
                <p className="text-red-800">
                  Please choose at least one option
                </p>
              )}
              <button
                onClick={nextHandler}
                className="bg-red-500 mt-10 flex items-center justify-center w-[290px] h-[65px] text-[30px] text-white font-semibold rounded-[50px] sticky bottom-0"
              >
                Next
                <span className="absolute right-5 font-extrabold">
                  <BsArrowRightShort />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;
