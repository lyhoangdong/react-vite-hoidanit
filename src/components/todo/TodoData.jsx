const TodoData = (props) => {

    const { todoList, deleteTodo } = props;

    console.log(">>> check props", props)


    const handleClick = (id) => {
        deleteTodo(id)
    }

    return (
        <div>
            <div className='todo-data'>
                {todoList.map((item, index) => {
                    console.log(">>> Check map", item, index)
                    return (
                        <div className="todo-item" key={item.id}>
                            {item.name} <button
                                onClick={() => handleClick(item.id)}
                            >Delete</button>
                        </div>)
                })}
            </div>
        </div>
    )
}
export default TodoData