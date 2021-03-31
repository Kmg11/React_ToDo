import './TasksList.css';

function TaskUI(props) {
	const {TaskText, deleteTask} = props

	return (
		<div className="task">
			<div className="left-side">
				<input className="task-done-btn" type="checkbox"></input>
				<span className="task-text">{TaskText}</span>
			</div>

			<div className="right-side">
				<span className="icon-bin task-delete-btn" onClick={() => deleteTask(TaskText)}></span>
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
	const { tasks, deleteTask } = props;
	const TasksList = tasks.length ? (
		tasks.map(task => {
			return (
				<TaskUI key={Math.random() * 10} TaskText={task.text} deleteTask={deleteTask} />
			)
		})
	) : (
		<div className="no-tasks">No Tasks Added</div>
	)

	return (
		<div className="tasks-list">
			<h3 className="tasks-title">Tasks</h3>
			<div className="tasks-container">
				{TasksList}
			</div>
			<div className="btns-container">
				<DoneAllBtn />
			</div>
		</div>
	)
}

export default TasksList;