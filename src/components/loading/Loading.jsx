import React from 'react';

import './Loading.scss';

function Loading() {

    return(
        <div className="body">
            <div className="circle-loading"></div>
            <div className="skeleton-loading"></div>
        </div>
    );
}

export default Loading;