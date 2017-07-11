import React from 'react';
import Lanes from './lanes';

export default ({ dashboard, actions }) => {
    return (<div><Lanes lanes={dashboard.lanes} cards={dashboard.cards} actions={actions} /></div>)
}