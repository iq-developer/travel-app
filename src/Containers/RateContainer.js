import React from 'react'
import { Rate } from 'antd';

import * as axios from 'axios';


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Rater extends React.Component {
    state = {
        value: 0,
    };

    handleChange = value => {
        this.setState({ value });
        this.props.setModal(false)
        axios.post("https://dzianiskor-travel-app-server.herokuapp.com/api/ratings/set-rating", {
            galleryId:this.props.galleryId,
            rating: value
        }, {
            headers: {'Authorization': `Bearer ${this.props.token}`}
        })
    };

    render() {
        const { value } = this.state;
        return (
            <span>
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      </span>
        );
    }
}

export default Rater;