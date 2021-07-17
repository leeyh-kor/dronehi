import React from "react";

import { result } from "../utils/constant";

import "./Result.scss";
interface Props {
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
}

const Result = ({ results }: Props) => {
  let mbti: string = "";
  if (results.I >= results.E) {
    mbti += "I";
  } else {
    mbti += "E";
  }
  if (results.S >= results.N) {
    mbti += "S";
  } else {
    mbti += "N";
  }
  if (results.T >= results.F) {
    mbti += "T";
  } else {
    mbti += "F";
  }
  if (results.P >= results.J) {
    mbti += "P";
  } else {
    mbti += "J";
  }

  return (
    <div className="container">
      <h1
        style={{ backgroundColor: "#e4bc58", width: "100%", color: "#ffffff" }}
      >
        역사 인물 테스트
      </h1>
      <img src={result[mbti].imgUrl}></img>
      <span>
        나와 가장 닮은 역사인물은 ..
        {"\n\n" + result[mbti].name}
      </span>
    </div>
  );
};

export default Result;
