import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import TaskListModel from 'model/TaskList';
import TaskListView from './TaskList';

function renderRoot() : void {

  const taskListModel = new TaskListModel;

  ReactDOM.render(
    <React.StrictMode>
      <App taskListComponent={ <TaskListView model = { taskListModel } /> } />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default renderRoot;
