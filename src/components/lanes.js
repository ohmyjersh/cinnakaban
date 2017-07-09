import React from 'react';
import {Row} from 'antd';
import Lane from './lane'

export default ({lanes, actions}) => {
    console.log(lanes);
    return (
        <Row>
           { lanes.map((x, index) => <Lane key={index} size={8} />) }
    </Row> )
}