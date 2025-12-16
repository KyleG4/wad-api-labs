function Task({ title, description, deadline, priority, done, markDone, deleteTask }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: done
          ? 'lightgrey'
          : (priority === 'High'
              ? '#d9534f'
              : priority === 'Medium'
                ? '#f0ad4e'
                : '#5bb4c4')
      }}
    >
      <p className="title">{title}</p>
      {description && <p><em>{description}</em></p>}
      <p>Due: {deadline}</p>
      {priority && <p className="priority">{priority}</p>}
      <button onClick={markDone} className="doneButton">Done</button>
      <button className="deleteButton" onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default Task;
