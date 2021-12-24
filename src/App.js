import Todo from "./components/Todo";
const checkListDefault = ["React", "Webpack", "Typescript"];
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <button>Add task</button>
      {checkListDefault.map((item) => (
        <Todo title={item} />
      ))}
    </div>
  );
}

export default App;
