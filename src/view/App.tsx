import React from 'react';
import TaskList from './TaskList'

class App extends React.PureComponent 
{
  render() {
    return (
      <div className="App">
        <TaskList tasks={['Task 1', 'Task 2', 'Task 3']} />
      </div>
    );
  }
}

export default App;
