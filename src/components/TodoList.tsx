import React from 'react';
import './TodoList.css';

interface TodoListProps {
    items: { id: string; text: string }[];
    onDeleteTodo: (id: string) => void;
}
const TodoList: React.FC<TodoListProps> = (props) => {
    const { items, onDeleteTodo } = props;
    return (
        <ul>
            {items.map(({ id, text }) => (
                <li key={id}>
                    <span>{text}</span>
                    <button onClick={() => onDeleteTodo(id)}>DELETE</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
