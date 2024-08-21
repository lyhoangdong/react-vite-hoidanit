const TodoNew = (props) => {
    console.log(">>> Check props", props)
    const { addNewTodo } = props

    //addNewTodo("Eric")
    const handleClick = () => {
        alert("Click me");
    }

    const handleOnChange = (name) => {
        console.log(">>>handleOnChange", name)
    }


    return (
        <div>
            <input type="text" placeholder='Enter your task'
                style={{ fontSize: '16px', borderRadius: '5px' }}
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                style={{
                    backgroundColor: 'blue',
                    fontSize: "16px",
                    color: 'white',
                    borderRadius: '5px',
                    marginLeft: '5px',
                    cursor: "pointer"
                }}
                onClick={handleClick}
            >Add</button>
        </div>

    )
}
export default TodoNew