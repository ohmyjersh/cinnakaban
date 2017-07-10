import React from 'react';
import Lanes from './lanes';

export default ({ dashboard, actions }) => {
    return (<div><Lanes lanes={dashboard.lanes} actions={actions} /></div>)
}