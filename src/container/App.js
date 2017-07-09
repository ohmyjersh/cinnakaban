import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './App.css';
import LanesDashboard from '../components/lanesDashboard';
import {actionCreators as actions} from '../state';

const App = ({dashboard, actions}) => {
    return (
      <div className="App">
        <LanesDashboard dashboard={dashboard} actions={actions} />
      </div>
    );
}


const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}



const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
