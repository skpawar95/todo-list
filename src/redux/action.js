import { ADD_TODO, EDIT_TODO_ITEM, FILTER_TODO, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "./actionType"


export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text }
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: { id }
});

export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    payload: { id }
});

export const markIncomplete = (id) => ({
    type: MARK_INCOMPLETE,
    payload: { id }
});

export const filterTodo = (filter) => ({
    type: FILTER_TODO,
    payload: { filter }
});


export const updateSearchTerm = (searchTerm) => ({
    type: UPDATE_SEARCH_TERM,
    payload: { searchTerm }
});

export const editTodoItem = (todosObj) => ({
    type: EDIT_TODO_ITEM,
    payload:  todosObj
});



