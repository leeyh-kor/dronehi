import React from 'react';
import Header from '../components/header';
import HomeBody from '../components/HomeBody';
import "./Home.scss";

const Home=()=>{
    const images = ["https://dronehi.s3.ap-northeast-2.amazonaws.com/photos/school_Shot/1.jpg",
    "https://dronehi.s3.ap-northeast-2.amazonaws.com/photos/school_Shot/2.png",
    "https://dronehi.s3.ap-northeast-2.amazonaws.com/photos/school_Shot/3.png",
   "https://dronehi.s3.ap-northeast-2.amazonaws.com/photos/school_Shot/4.jpg"]
    
    return (<div className="Wrap">
   <Header ></Header>
   <div className="Body">
   <video autoPlay muted loop><source src ="https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/KakaoTalk_20201230_185331100.mp4" type="video/mp4"/></video>
    <div className = "BodyImages">{images.map(image =>{ return<HomeBody image={image} name="123" ></HomeBody>})}</div>
   </div>
</div>
 )
}
export default Home;