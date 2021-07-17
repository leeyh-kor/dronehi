import React, { useState } from "react";
import Questions from "../components/Question";
import Result from "../components/Result";
import { items } from "../utils/constant";
import "./Home.scss";
const results = { I: 0, E: 0, N: 0, S: 0, T: 0, F: 0, P: 0, J: 0 };

const Home = () => {
  let Customers = 1231111;
  const [index, setIndex] = useState(0);

  const _handleClick = (type?: string) => {
    setIndex(index + 1);
    if (type) {
      results[type] += 1;
    }
  };
  return (
    <div className="wrapper">
      {index === 0 ? (
        <div className="container">
          <img
            src="https://raw.githubusercontent.com/leeyh-kor/dronehi/master/src/components/images/Q1.jpg"
            alt=""
            className="main_img"
          ></img>

          <h3 className="main_sub">나와 닮은 역사 인물 테스트</h3>

          <button
            style={{ backgroundColor: "#e4bc58", border: "none" }}
            onClick={() => _handleClick()}
          >
            테스트 시작
          </button>
          <div>참여자수{Customers.toLocaleString()}</div>
        </div>
      ) : index === items.length + 1 ? (
        <Result results={results} />
      ) : (
        <Questions
          data={items[index - 1]}
          results={results}
          _handleClick={_handleClick}
        />
      )}
    </div>
  );
};
export default Home;
