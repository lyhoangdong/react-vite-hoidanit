import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props
    //useState hook
    const [valueInput, setValueInput] = useState("eric")
    //addNewTodo("Eric")
    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }


    return (
        <div>
            <input type="text" placeholder='Enter your task'
                style={{ fontSize: '16px', borderRadius: '5px' }}
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
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
            <div> My text input is: {valueInput} </div>
        </div>

    )
}
export default TodoNew