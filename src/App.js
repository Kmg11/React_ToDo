import { Component } from 'react';
import AddTask from './components/AddTask/AddTask';
import TasksList from './components/TasksList/TasksList';
import './App.css';

class App extends Component {
  state = {
    tasks: [
      "This Is Task Number 1",
      "This Is Task Number 2",
      "This Is Task Number 3"
    ]
  }

  // Delete Task Function
  deleteTask = (text, checkedTasks) => {
    document.querySelectorAll(".task.done").forEach(task => {
      const taskText = task.querySelector(".task-text").textContent;

      if (taskText === text) {
        task.classList.remove("done");
        task.querySelector(".task-done-btn").removeAttribute("checked");

        checkedTasks.forEach((checkedTask, index) => {
          if (checkedTask === taskText) {
            checkedTasks.splice(index, 1);
          }
        });
      }

    });

    const tasks = this.state.tasks.filter(task => task !== text);
    this.setState({tasks});
  }

  // Add Task Function
  addNewTask = (value) => {
    let notEqual = 0

    this.state.tasks.forEach(task => {
      if (task !== value && notEqual === 0) {
        notEqual++;

        this.state.tasks.push(value);
        
        this.setState({
          tasks: this.state.tasks
        });
      } else if (task === value) {
        notEqual++;
        return false
      }
    });
  }

  notEqual = 0;

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
