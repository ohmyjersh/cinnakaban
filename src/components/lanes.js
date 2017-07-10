import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import {Row} from 'antd';
import Lane from './lane'

const Lanes = ({lanes, actions}) => {
    return (
        <Row>
           { lanes.map((x, index) => <Lane key={index} size={8} />) }
    </Row> )
}

export default DragDropContext(HTML5Backend)(Lanes);