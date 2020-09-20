import React from 'react'

import Logo1 from './logo1.png'
import Logo2 from './logo2.png'

export default function logo(props) {
    let path = "";
    if (props.layout == '1') {
        path = Logo1;
    }
    else if (props.layout == '2') {
        path = Logo2;
    }
    return (
        <div>
            <img src={path} width="200px" style={{ margin: '15px'}}alt="Mr. Manager"/>
        </div>
    )
}
