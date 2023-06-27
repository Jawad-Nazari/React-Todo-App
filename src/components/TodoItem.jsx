import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/TodoItem.module.css";

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const completedStyle = {
    color: "#666666",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };

  const viewModeStyles = {
    display: editing ? "none" : "block",
  };

  const editModeStyles = {
    display: editing ? "block" : "none",
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewModeStyles}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button className="Edit" onClick={handleEditing}>
          Edit
        </button>
        <button className="Delete" onClick={() => delTodo(itemProp.id)}>
          Delete
        </button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        value={itemProp.title}
        style={editModeStyles}
        className={styles.textInput}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
