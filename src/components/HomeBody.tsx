import React from 'react';
import {Link} from 'react-router-dom';

import './HomeBody.scss';

function HomeBody (image,name) {
    
    return (
        <Link  to={{
            pathname: "/about",
            state: {
              name:name,
            }
          }} >
                    <img src={image.children} alt="이미지 오류" ></img>
        </Link>
    );
  }
  
  export default HomeBody;
  