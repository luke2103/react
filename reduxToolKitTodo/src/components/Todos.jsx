import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo,updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
        <div className='mt-5'>
            <ul className='list-none'>
                {todos.map((todo) => (
                    <li key={todo.id} className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'>
                        <div className='text-white'>{todo.text}</div>
                        {/* update todo text */}
                        <button onClick={() => dispatch(updateTodo(todo.id))} className='text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md'>
                            <i className='fa-solid fa-pen-to-square'>Update</i>
                        </button>
                        {/* toggle todo completed status */}
                      
                        {/* delete todo */}
                        {/*  dispatch is used to dispatch an action to the store */}
                        <button onClick={() => dispatch(removeTodo(todo.id))} className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'>
                            <i className='fa-solid fa-trash'>Delete</i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    
        </>
    )
}

export default Todos
