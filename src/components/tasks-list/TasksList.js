import './TasksList.css';

function Task() {
	return (
		<div className="task">
			<div className="left-side">
				<input className="task-done-btn" type="checkbox"></input>
				<span className="task-text">Hello Form Area</span>
			</div>
			<div className="right-side">
				<span className="icon-bin task-delete-btn"></span>
			</div>
		</div>
	)
}

function DoneAllBtn() {
	return (
		<button className="done-all-btn">
			<span>Done All</span>
		</button>
	)
}

function TasksList(props) {
	return (
		<div className="tasks-list">
			<h3 className="tasks-title">Tasks</h3>
			<div className="tasks-container">
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
			</div>
			<div className="btns-container">
				<DoneAllBtn />
			</div>
		</div>
	)
}

export default TasksList;