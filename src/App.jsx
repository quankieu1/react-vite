import "./components/todo/todo.css"
import ToDoData from "./components/todo/ToDoData"
import ToDoNew from "./components/todo/ToDoNew"
import reactLogo from './assets/react.svg'
const App = () => {

  const hoidanit = "Eric ASE";
  const age = 25;
  const data = {
    address: "Ha Noi",
    country: "Viet Nam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <ToDoNew />
      <ToDoData
        name={hoidanit}
        age={age}
        data={data}
      />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  )
}

export default App
