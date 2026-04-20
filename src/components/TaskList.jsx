import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <ul className="list-group">
      {tasks.length === 0 ? (
        <p className="text-center text-danger">No tasks yet 😴</p>
      ) : (
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}          
            index={index}        
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))
      )}
    </ul>
  );
}

export default TaskList;