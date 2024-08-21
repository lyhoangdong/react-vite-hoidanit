const TodoNew = (props) => {
    console.log(">>> Check props", props)
    const { addNewTodo } = props

    //addNewTodo("Eric")


    return (
        <div>
            <input type="text" placeholder='Enter your task'
                style={{ fontSize: '16px', borderRadius: '5px' }}
            />
            <button
                style={{
                    backgroundColor: 'blue',
                    fontSize: "16px",
                    color: 'white',
                    borderRadius: '5px',
                    marginLeft: '5px'
                }}>Add</button>
        </div>

    )
}
export default TodoNew