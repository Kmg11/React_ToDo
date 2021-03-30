import './Add-Task.css';

function AddTask(props) {
	return (
		<div className="add-task">
			<form className="add-task-form">
				<input type="text" placeholder="Create Task" className="add-task-input" />
				<input type="submit" value="+" className="add-task-btn" />
			</form>
		</div>
	)
}

export default AddTask;