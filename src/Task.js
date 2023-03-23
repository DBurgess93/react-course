export const Task = (props) => {
  return (
    <div
    className="task"
    style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <button onClick={() => props.completeTask(props.id)}
        style={{ backgroundColor: props.completed ? "pink" : "default"}}
      >
        {props.completed ? "Completed" : "Complete"}
      </button>
      <button onClick={() => props.deleteTask(props.id)}> Delete </button>
    </div>
  );
};
