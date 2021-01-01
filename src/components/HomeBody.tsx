import React from 'react';
import {Link} from 'react-router-dom';

import './HomeBody.scss';

function HomeBody (props) {
    console.log(props)
    return (
        <Link  to={{
            pathname: "/about"
            }} >
                    <img src={props.image} alt="이미지 오류" ></img>
        </Link>
    );
  }
  
  export default HomeBody;
  