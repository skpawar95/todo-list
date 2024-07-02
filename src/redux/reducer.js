import { ADD_TODO, EDIT_TODO_ITEM, FILTER_TODO, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "./actionType";

const initialState = {
    todos: [],
    filter: "ALL",
    searchTerm: ""
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, { todos: action.payload.text, completed: false }],
                filter: state.filter,
                searchTerm: state.searchTerm
            }
        case TOGGLE_TODO:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: !todo.completed } : todo),
                filter: state.filter,
                searchTerm: state.searchTerm
            }
        case REMOVE_TODO:
            return {
                todos: state.todos.filter((todo, index) =>
                    index !== action.payload.id),
                filter: state.filter,
                searchTerm: state.searchTerm
            }
        case MARK_COMPLETED:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: true } : todo),
                filter: state.filter,
                searchTerm: state.searchTerm
            }
        case MARK_INCOMPLETE:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: false } : todo),
                filter: state.filter,
                searchTerm: state.searchTerm
            }
        case FILTER_TODO:
            return {
                todos: state.todos,
                filter: action.payload.filter,
                searchTerm: state.searchTerm
            }
        case UPDATE_SEARCH_TERM:
            return {
                todos: state.todos,
                filter: state.filter,
                searchTerm: action.payload.searchTerm
            }
        case EDIT_TODO_ITEM:
            return {
                todos: state.todos.map((item, index) => {
                    if (index === action.payload.id) {
                        return { ...item, todos: action.payload.todos }
                    }
                    return item;
                }),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        default:
            return state;
    }
}

export default todoReducer;