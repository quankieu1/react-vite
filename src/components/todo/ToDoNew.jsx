
const ToDoNew = (props) => {
  console.log(">>> check point: ", props);
  const {addNewToDo} = props;

    // addNewToDo("Eric")
    return (
        <div className="todo-new">
        <input type="text" />
        <button>Add</button>
      </div>
    )
    
}
export default ToDoNew;