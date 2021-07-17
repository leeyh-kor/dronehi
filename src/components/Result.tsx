import React from "react";

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

  return <div>당신의mbti는 {mbti}입니다.</div>;
};

export default Result;
