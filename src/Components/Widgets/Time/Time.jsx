import React from 'react';

import s from './Time.module.css';
import {languageFunc, MonthInData} from "../../../common/functions/functions";


class Time extends React.Component {


constructor(props) {
        super(props);
        this.state = {
            time: this.toOffsetDate(this.props.offset)
        };
    }


componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    toOffsetDate(offset) {
        let d = new Date();
        let y = d.getFullYear()
        let hrs = d.getUTCHours() + this.props.utc;



        let mo = d.getMonth()
        switch (mo) {
            case 0:
                mo = MonthInData(mo, this.props.lang, 'Январь', 'January', 'Januar')
                break;
            case 1:
                mo = MonthInData(mo, this.props.lang, 'Февраль', 'February', 'Februar')
                break;
            case 2:
                mo = MonthInData(mo, this.props.lang, 'Март', 'March', 'März')
                break;
            case 3:
                mo = MonthInData(mo, this.props.lang, 'Апрель', 'April', 'April')
                break;
            case 4:
                mo = MonthInData(mo, this.props.lang, 'Май', 'May', 'Kann')
                break;
            case 5:
                mo = MonthInData(mo, this.props.lang, 'Июнь', 'June', 'Juni')
                break;
            case 6:
                mo = MonthInData(mo, this.props.lang, 'Июль', 'July', 'Juli')
                break;
            case 7:
                mo = MonthInData(mo, this.props.lang, 'Август', 'August', 'August')
                break;
            case 8:
                mo = MonthInData(mo, this.props.lang, 'Сентябрь', 'September', 'September')
                break;
            case 9:
                mo = MonthInData(mo, this.props.lang, 'Октябрь', 'October', 'Oktober')
                break;
            case 10:
                mo = MonthInData(mo, this.props.lang, 'Ноябрь', 'November', 'November')
                break;
            case 11:
                mo = MonthInData(mo, this.props.lang, 'Декабрь', 'December', 'Dezember')
                break;
            default: mo = 'new'
                break;
        }


        let day = d.getUTCDate();
        if (day === 28 && d.getMonth() === 1 && Number(d.getUTCHours() + this.props.utc) === 24) {
            mo++;
            day = 1;
        }

        if (day === 31 && (d.getMonth() === 0 || d.getMonth() === 2 || d.getMonth() === 4
            || d.getMonth() === 6 || d.getMonth() === 7 || d.getMonth() === 9 || d.getMonth() === 10
            || d.getMonth() === 11) && Number(d.getUTCHours() + this.props.utc) >= 24) {
            if (d.getMonth() === 11) {
                mo = 0;
                day = 1;
                y++;
            }
            mo++;
            day = 1;
        } else if (day === 30 && (d.getMonth() === 3 || d.getMonth() === 5 || d.getMonth() === 7
            || d.getMonth() === 6 || d.getMonth() === 7 || d.getMonth() === 9 || d.getMonth() === 10
            || d.getMonth() === 11) && Number(d.getUTCHours() + this.props.utc) >= 24) {
            mo++;
            hrs = Number(d.getUTCHours() + this.props.utc) -24 ;
            day = 1;
            y++;
        }
        if (hrs < 10) {
            hrs = '0' + Number(d.getUTCHours() + this.props.utc);
        } else {
            hrs = Number(d.getUTCHours() + this.props.utc);
        }
        if (hrs >= 24) {
            hrs = hrs - 24;
            day++;
        }

        let mins = d.getUTCMinutes();
        if (mins < 10) {
            mins = '0' + d.getUTCMinutes();
        } else {
            mins = d.getUTCMinutes();
        }


        let secs = d.getUTCSeconds();
        if (secs < 10) {
            secs = '0' + d.getUTCSeconds();
        } else {
            secs = d.getUTCSeconds();
        }


        return (
          `${hrs}:${mins}:${secs}
          ${mo}, ${day}, ${y}`
        ); 

    }

    tick() {
        this.setState({
            time: this.toOffsetDate(this.props.offset)
        });
    }
    render() {
        return (
            <article className={s.time}>
                <h4>{languageFunc(this.props.lang,
                    'Местное время',
                    'The local time',
                    'Die Ortszeit')}</h4>
                <h3>{this.state.time}</h3>
            </article>
        );
    }
}

export default Time;
