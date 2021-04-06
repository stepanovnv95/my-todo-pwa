import React from 'react'
import TaskListModel from 'model/TaskList';

interface TaskListProps {
  model: TaskListModel;
}

class TaskList extends React.PureComponent<TaskListProps> 
{
  render() {
    return (
      <>
        {this.body()}
      </>
    );
  }

  body(): JSX.Element {
    if (this.props.model.tasks.length > 0) {
      return <ul>{this.list()}</ul>;
    } else {
      return <p>Empty</p>;
    }
  }
  
  list(): JSX.Element[] {
    const l = this.props.model.tasks.map((t): JSX.Element => {
      return <li>{t}</li>;
    });
    return l;
  }
}

export default TaskList;
