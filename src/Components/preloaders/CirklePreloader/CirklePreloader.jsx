import React from 'react';
import s from "../../OwnPage/OwnPage.module.css";
import {LoadingOutlined} from "@ant-design/icons";

const CirklePreloader = () => {
    return (
        <div className={s.preloader}>
            <LoadingOutlined />
        </div>
    );
};

export default CirklePreloader;