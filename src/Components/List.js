import { Component } from "react";

class List extends Component {
	render() {
		const { tasks, deleteTask, completeTask } = this.props;
		const tasksList = tasks.map((task, index) => {
			return (
				<div key={index} className="task">
					<div className="left-side">
						<input
							className="task-done-btn"
							type="checkbox"
							onClick={() => {completeTask(index)}}
						></input>
						<span className="task-text">{task.text}</span>
					</div>

					<div className="right-side">
						<span
							className="icon-bin task-delete-btn"
							onClick={() => deleteTask(index)}
						></span>
					</div>
				</div>
			);
		});

		return (
			<div className="tasks-container">
				<h3 className="tasks-title">Tasks</h3>
				<div className="tasks-list">
					{tasks.length ? (
						tasksList
					) : (
						<div className="no-tasks">No Tasks Added</div>
					)}
				</div>
				<button className="done-all-btn">
					<span>Done All</span>
				</button>
			</div>
		);
	}
}

export default List;
