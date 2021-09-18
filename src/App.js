import { Component } from "react";
import Form from "./Components/Form";
import List from "./Components/List";

class App extends Component {
	// Main State
	state = {
		tasks: [
			{ text: "Task 1", completed: false },
			{ text: "Task 2", completed: false },
			{ text: "Task 3", completed: false },
		],
		current: "",
	};

	// handleChange
	handleChange = (e) => {
		this.setState({ current: e.target.value });
	};

	// addTask
	addTask = (e) => {
		e.preventDefault();

		const { tasks, current } = this.state;

		if (current !== "") {
			tasks.unshift({ text: current, completed: false });
			this.setState({ tasks, current: "" });
		} else {
			alert("Sorry You Can't Add Empty Task");
		}
	};

	// deleteTask
	deleteTask = (index) => {
		const tasks = this.state.tasks;
		tasks.splice(index, 1);
		this.setState({ tasks });
	};

	// completeTask
	completeTask = (index) => {
		const tasks = this.state.tasks;
		tasks[index].completed = !tasks[index].completed;
		this.setState({ tasks });
	};

	// completeAllTasks
	completeAllTasks = () => {
		const tasks = this.state.tasks;
		tasks.forEach((task, index) => {
			tasks[index].completed = true;
		});
		this.setState({ tasks });
	};

	render() {
		return (
			<div className="App">
				<Form
					inputValue={this.state.current}
					addTask={this.addTask}
					handleChange={this.handleChange}
				/>
				<List
					tasks={this.state.tasks}
					deleteTask={this.deleteTask}
					completeTask={this.completeTask}
					completeAllTasks={this.completeAllTasks}
				/>
			</div>
		);
	}
}

export default App;
