import React from 'react';
import { DropTarget } from 'react-dnd';
import { Col } from 'antd';
import ItemTypes from '../constants/itemTypes';
import Card from './card';

const Lane = (props) => {
    const { size, title, cards, actions, connectDropTarget, isOver, canDrop, children } = props;
    return connectDropTarget(<div>
        <Col span={size}>
            <Card />
        </Col>
    </div>)
}

const laneTarget = {
    canDrop(props) {
        //console.log('can drop', props);
        // check if current lane
        //return canMoveKnight(props.x, props.y);
    },

    drop(props) {
        //console.log('dropping', props);
        // fire action to push to new lane
        //moveKnight(props.x, props.y);
    },
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    };
}
export default DropTarget(ItemTypes.CARD, laneTarget, collect)(Lane);