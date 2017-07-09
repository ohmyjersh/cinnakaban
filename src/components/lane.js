import React from 'react';
import {Col} from 'antd';
import Card from './card';

export default ({size, title, cards, actions}) => {
    return (<div>
        <Col span={size}>
           <Card />
        </Col>
    </div>)
}