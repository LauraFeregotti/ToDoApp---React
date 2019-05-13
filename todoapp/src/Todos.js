import React from 'react'

const Todos = ({ todos, deleteTodo  }) => {
    
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="class collection-item" key={todo.id} >
                    <span onClick={ ()=> {deleteTodo(todo.id)}} > {todo.content} </span>
                </div>
            )
        })) : (<p className="center"> you have no todo's</p>)
    return (
        <div className="Todos collection">
{todoList}
        </div>
    )
}

export default Todos