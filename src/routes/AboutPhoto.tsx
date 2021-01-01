import React from 'react';
import Header from '../components/header';
import './AboutPhoto.scss';
import "react-slideshow-image/dist/styles.css";
import { Fade } from 'react-slideshow-image';

 const AboutPhoto=()=>{
    const fadeImages = ["https://dronehi.s3.ap-northeast-2.amazonaws.com/photos/school_Shot/1.jpg",
   "https://dronehi.s3.ap-northeast-2.amazonaws.com/photos/school_Shot/2.png",
   "https://dronehi.s3.ap-northeast-2.amazonaws.com/photos/school_Shot/3.png",
  "https://dronehi.s3.ap-northeast-2.amazonaws.com/photos/school_Shot/4.jpg"]
  
    return (
    <div className="wrap">
         <Header></Header>
         <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} alt="이미지 로드 실패 " />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]}alt="이미지 로드 실패 " />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} alt="이미지 로드 실패 "/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[3]} alt="이미지 로드 실패 "/>
        </div>
      </Fade>
    </div>
</div> )
}

export default AboutPhoto;