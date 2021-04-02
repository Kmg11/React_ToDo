import {Component, Fragment} from 'react'
import './TasksList.css';

function TasksList(props) {
	const {tasks, deleteTask} = props;

	return (
		<div className="tasks-list">
			<h3 className="tasks-title">Tasks</h3>

			<div className="tasks-container">
				<TaskUI tasks={tasks} deleteTask={deleteTask}/>
			</div>
			
			<div className="btns-container">
				<DoneAllBtn />
			</div>
		</div>
	)
}

class TaskUI extends Component {
	state = {
		checkedTasks: []
	}
	
	handleDoneTask = (e) => {
		const taskText = e.target.parentElement.querySelector(".task-text").textContent;

		if (e.target.parentElement.parentElement.classList.contains("done")) {
			e.target.parentElement.parentElement.classList.remove("done");
			e.target.removeAttribute("checked");
		} else {
			e.target.parentElement.parentElement.classList.add("done");
			e.target.setAttribute("checked", "checked");
		}

		if (this.state.checkedTasks.length) {
			this.state.checkedTasks.forEach((task, index) => {
				if (task !== taskText) {
					this.state.checkedTasks.push(taskText);
				} else {
					this.state.checkedTasks.splice(index, 1);
				}
			});
		} else {
			this.state.checkedTasks.push(taskText);
		}
	}

	makeTasksDone = () => {
		document.querySelectorAll(".task").forEach(task => {
			this.state.checkedTasks.forEach(checkedTask => {
				if (task.querySelector(".task-text").textContent === checkedTask) {
					task.classList.add("done");
					task.querySelector(".task-done-btn").setAttribute("checked", "checked");
				}
			});
		});
	}

	componentDidUpdate() {
		this.makeTasksDone();
	}

	render() {
		const {tasks, deleteTask} = this.props;

		const TasksList = tasks.length ? (
			tasks.map(task => {
				return (
					<div key={Math.random() * 10} className="task">
						<div className="left-side">
							<input className="task-done-btn" type="checkbox" onClick={this.handleDoneTask}></input>
							<span className="task-text">{task}</span>
						</div>
			
						<div className="right-side">
							<span className="icon-bin task-delete-btn" onClick={() => deleteTask(task, this.state.checkedTasks)}></span>
						</div>
					</div>
				)
			})
		) : (
			<div className="no-tasks">No Tasks Added</div>
		)
	
		return (
			<Fragment>
				{TasksList}
			</Fragment>
		)
	}
}

function DoneAllBtn() {
	// Still Not Working Good [NEED SOME MAINTANCE]
	const handleDoneAll = () => {
		document.querySelectorAll(".task").forEach(task => {
			task.classList.add("done");
			task.querySelector(".task-done-btn").setAttribute("checked", "checked");
		});
	}

	return (
		<button className="done-all-btn" onClick={handleDoneAll}>
			<span>Done All</span>
		</button>
	)
}

export default TasksList;