import React from 'react';
import Header from '../components/header';
import HomeBody from '../components/HomeBody';
import "./Home.scss";

const Home=()=>{
    const images = ["https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/%EB%AA%85%EC%96%B82.jpg",
    "https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/%EB%AA%85%EC%96%B8+%EC%98%A4%EB%AF%80.png"]
return (<div className="Wrap">
   <Header ></Header>
   <div className="Body">
   <video autoPlay muted loop><source src ="https://dronehi.s3.ap-northeast-2.amazonaws.com/background-video/KakaoTalk_20201230_185331100.mp4" type="video/mp4"/></video>
    <div className = "BodyImages">{images.map(image =>{ return<HomeBody>{image}</HomeBody>})}</div>
   </div>
</div>
 )
}
export default Home;