import React from 'react';

import s from './PointLoader.module.css';

const PointLoader = () => {
    return (
        <div className = {s.wrapper}>
            <div className = {s.lds_ellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default PointLoader;