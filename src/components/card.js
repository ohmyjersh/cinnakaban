import React from 'react';
import { DragSource } from 'react-dnd';
import {Card} from 'antd';
import ItemTypes from '../constants/itemTypes';

const KanbanCard = (props) => {
    const { connectDragSource, isDragging } = props;
    return connectDragSource(<div>
        <Card style={{opacity: isDragging ? 0.5 : 1}} >
            this is a card
        </Card>
    </div>)
}


const cardSource  = {
  beginDrag(props) {
    console.log(props);
    return {};
  },
  isDragging(props, monitor) {
    const item = monitor.getItem();
    //const dropResult = monitor.getDropResult();

    console.log('item', item);
    //console.log('dropresult', dropResult);
    //return props.id === monitor.getItem().id
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(KanbanCard);
