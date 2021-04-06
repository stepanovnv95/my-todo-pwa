import React from 'react';

interface AppProps {
  taskListComponent: JSX.Element;
}

class App extends React.PureComponent<AppProps>
{
  render() {
    return (
      <div className="App">
        { this.props.taskListComponent }
      </div>
    );
  }
}

export default App;
