import { Component } from 'react';
import AddTask from './components/add-task/Add-Task';
import TasksList from './components/tasks-list/TasksList';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <AddTask />
        <TasksList />
      </div>
    )
  }
}

export default App;
