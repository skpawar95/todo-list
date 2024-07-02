import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = () => {

    // here we take data from use selector and also to checking its status

    const filteredTodos = useSelector((state) => {  
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo) => {
            const matchsFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPELET" && !todo.completed) || (filter === "ALL");

            const matchsSearch = todo?.todos?.toLowerCase()?.includes(searchTerm);
            console.log(searchTerm)

            return matchsFilter && matchsSearch
        })
    })
  
    console.log(filteredTodos,"filteredTodos")
    return (
        <ul>
            <li className='my-2 text-sm italic'> Your Notes Here....</li>
            {
                filteredTodos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} index={index} />
                ))
            }
        </ul>
    )
}

export default TodoList