import React, { useState, useRef } from 'react'
import { FaToggleOff, FaToggleOn, FaCheck, FaTimes, FaTrash, FaPaintBrush } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { editTodoItem, markCompleted, removeTodo, toggleTodo } from '../redux/action'

const TodoItem = ({ todo, index }) => {

    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const textRef = useRef(null);



    function editTodoListItem(e) {
        e.preventDefault();
        console.log({ todos: textRef.current.value, id: index })
        dispatch(editTodoItem({ todos: textRef.current.value, id: index }));
        setIsEdit(false);
        textRef.current = null;

    }



    const renderForm = () => {
        return (
            <>
                <form onSubmit={editTodoListItem}>
                    <input
                        type="text"
                        ref={textRef}
                        defaultValue={todo.todos}
                        className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500' />
                    <button type='submit' className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'  >submit</button>
                </form>
            </>
        )
    }



    const renderItem = () => {
        return (
            <>
                <li className='flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2gap-4'>
                    <div className='flex items-center'>
                        <span className='mr-4 text-gray-500'>{index + 1}</span>
                        <span className={`mr-4 ${todo.completed ? "line-through text-red-500" : ""}`}>{todo?.todos}</span>
                    </div>
                    <div className='space-x-3 ml-8'>
                        <button
                            onClick={() => dispatch(toggleTodo(index))}
                            className='mr-2 text-sm bg-blue-600 text-white sm:px-2 py-1 rounded'>{todo.completed ? <FaToggleOff /> : <FaToggleOn />}</button>

                        <button
                            onClick={() => setIsEdit(true)}
                            className='mr-2 text-sm bg-green-600 text-white sm:px-2 py-1 rounded'><FaPaintBrush /></button>
                        {
                            !todo.completed && (
                                <button
                                    onClick={() => dispatch(markCompleted(index))}
                                    className='mr-2 text-sm bg-blue-600 text-white sm:px-2 py-1 rounded'>
                                    <FaCheck />
                                </button>
                            )
                        }
                        {
                            todo.completed && (
                                <button
                                    onClick={() => dispatch(markCompleted(index))}
                                    className='mr-2 text-sm bg-yellow-600 text-white sm:px-2 py-1 rounded'>
                                    <FaTimes />
                                </button>
                            )
                        }
                        <button
                            onClick={() => dispatch(removeTodo(index))}
                            className='mr-2 text-sm bg-red-600 text-white sm:px-2 py-1 rounded'><FaTrash /></button>
                    </div>
                </li>
            </>
        )
    }

    return (
        <>
            {isEdit ? renderForm() : renderItem()}
        </>
    )
}

export default TodoItem