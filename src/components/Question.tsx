import React from "react";
import "./Question.scss";

interface Props {
  data: {
    question: string;
    answer1: string;
    answer1Code: string;
    answer2: string;
    answer2Code: string;
    imgUrl: string;
  };
  results: {
    I: number;
    E: number;
    N: number;
    S: number;
    T: number;
    F: number;
    P: number;
    J: number;
  };
  _handleClick: (type?: string) => void;
}

const Questions = ({ data, _handleClick }: Props) => {
  console.log(data.imgUrl);
  return (
    <div className="question_wrapper">
      <img src={data.imgUrl} alt="" className="question_img" />
      <div className="question_question" style={{ opacity: 1 }}>
        {data.question}
      </div>
      <button onClick={() => _handleClick(data.answer1Code)}>
        {data.answer1}
      </button>
      <button onClick={() => _handleClick(data.answer2Code)}>
        {data.answer2}
      </button>
    </div>
  );
};

export default Questions;
