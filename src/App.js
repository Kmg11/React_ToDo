import { Component } from 'react';
import AddTask from './components/AddTask/AddTask';
import TasksList from './components/TasksList/TasksList';
import './App.css';

class App extends Component {
  state = {
    tasks: [
      {text: "This Is Task Number 1"},
      {text: "This Is Task Number 2"},
      {text: "This Is Task Number 3"}
    ]
  }

  // Delete Task Function
  deleteTask = (text) => {
    const tasks = this.state.tasks.filter(task => task.text !== text);
    this.setState({tasks});
  }

  // Add Task Function
  addNewTask = (value) => {
    this.state.tasks.push({id: 5, text: value});

    this.setState({
      tasks: this.state.tasks
    });
  }

  render () {
    return (
      <div className="App">
        <AddTask addNewTask={this.addNewTask} />
        <TasksList tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    )
  }
}

export default App;
