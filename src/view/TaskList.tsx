import React from 'react'
import TaskListModel from 'model/TaskList';

interface TaskListProps {
  model: TaskListModel;
}

class TaskList extends React.PureComponent<TaskListProps> 
{
  render() {
    return <>{ this.isEmpty() ? this.renderEmpty() : this.renderList() }</>;
  }

  renderEmpty(): JSX.Element {
    return <p>Empty</p>;
  }

  renderList(): JSX.Element {
    return (
      <ul>
        { this.props.model.tasks.map(t => <li>{ t }</li>) }
      </ul>
    );
  }

  isEmpty(): boolean {
    return this.props.model.tasks.length === 0;
  }
}

export default TaskList;
