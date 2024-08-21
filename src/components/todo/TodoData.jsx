const TodoData = (props) => {
    //props la mot object
    // {
    //     name: "Eric",
    //         age: 25,
    //             data: { }
    // }
    const { name, age, data } = props;
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;
    //console.log(">>> check props", props)


    return (
        <div>
            <div className='todo-data'>
                <div> My name is {name}</div>
                <div> Learning React </div>
                <div> Learning React </div>
            </div>
        </div>
    )
}
export default TodoData