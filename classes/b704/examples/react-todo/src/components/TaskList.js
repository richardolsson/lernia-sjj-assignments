import TaskItem from "./TaskItem";

export default function TaskList() {
  return (
    <ul className="todo-list">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      {/*items.map((item, index) => {
        return (
          <li
            key={index}
            className={item.completed ? 'todo-item completed' : 'todo-item'}
          >
            <span onClick={() => {
              const newItems = items.map((oldItem, oldItemIndex) => {
                const newItem = {
                  text: oldItem.text,
                  completed: oldItem.completed,
                };

                if (oldItemIndex === index) {
                  newItem.completed = !newItem.completed;
                }

                return newItem;
              });

              setItems(newItems);
            }}>
              {item.text}
            </span>
            <button className="remove-button">🗑</button>
          </li>
        );
      })*/}
    </ul>
  );
}