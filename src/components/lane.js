import React from 'react';
import { DropTarget } from 'react-dnd';
import { Col } from 'antd';
import ItemTypes from '../constants/itemTypes';
import Card from './card';

const Lane = (props) => {
    const { size, title, cards, actions, connectDropTarget, isOver, canDrop, children } = props;
    return connectDropTarget(<div>
        <Col span={size}>
            {
                cards.map((x, index) => <Card index={index} card={x}/>)
            }
        </Col>
    </div>)
}

const laneTarget = {
	drop(props, monitor, component ) {
        console.log(props);
		const { id } = props;
		const sourceObj = monitor.getItem();		
		if ( id !== sourceObj.listId ) //component.pushCard(sourceObj.card);
		return {
			listId: id
		};
	}
}

export default DropTarget(ItemTypes.CARD, laneTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(Lane);