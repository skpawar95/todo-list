import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTodo } from '../redux/action';

const FilterButton = () => {

    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.filter)

    const handleFilter = (filter) => {
        dispatch(filterTodo(filter))
    }
// this block of code is used verify its status

    return (
        <div className='flex space-x-4 items-center'>
            <select
                value={currentFilter}
                onChange={(e) => handleFilter(e.target.value)}
                className='text-sm px-2 py-1 rounded border-gray-300 focus:outline-none'>
                <option value="ALL"> Default</option>
                <option value="COMPLETED"> Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>

        </div>
    )
}

export default FilterButton