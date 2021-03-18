import React from 'react';
import cn from 'classnames';
import s from './Footer.module.css';
import rs_school from './../../common/img/rs_school.svg'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.wrapper}>
                <div className={cn(
                    {[s.float]:true},
                    {[s.w150]: true}
                )}>
                    <p><strong>Created by</strong></p>
                    <p><strong>© 2021</strong></p>
                </div>

                <div className={cn(
                    {[s.float]:true},
                    {[s.w150]: true}
                )}>
                    <p><a href="https://github.com/slavalobikov">slavalobikov</a></p>
                    <p><a href="https://github.com/dzianiskor">dzianiskor</a></p>
                </div>
                <div className={cn(
                    {[s.float]:true},
                    {[s.w150]: true}
                )}>
                    <p><a href="https://github.com/iq-developer">iq-developer</a></p>
                    <p><a href="https://github.com/dmitsmerd">dmitsmerd</a></p>
                </div>
                <div className="float w150">
                    <a href="https://rs.school/react/"><img src={rs_school} alt="RS School" height="100px"
                                                            className={cn(
                                                                {[s.float]: true},
                                                                {[s.w150]: true},
                                                                {[s.logo]: true}
                                                            ) } /></a>
                </div>

            </div>

{/*
            <div className="wrapper">
                <div className="float w150">
                    <p><strong>Created by</strong></p>
                    <p><strong>© 2021</strong></p>
                </div>
                <div className="float w150">
                    <p><a href="https://github.com/slavalobikov">slavalobikov</a></p>
                    <p><a href="https://github.com/dzianiskor">dzianiskor</a></p>
                </div>
                <div className="float w150">
                    <p><a href="https://github.com/iq-developer">iq-developer</a></p>
                    <p><a href="https://github.com/dmitsmerd">dmitsmerd</a></p>
                </div>
                <div className="float w150">
                    <a href="https://rs.school/react/"><img src="img/rs_school.svg" alt="RS School" height="100px"
                                                            className="float w150"></a>
                </div>
            </div>
*/}
        </footer>
    );
};

export default Footer;