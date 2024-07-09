import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    setTasks([...tasks, { text: inputText, completed: false }]);
    setInputText("");
  };

  const handleTaskToggle = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="flex h-[100vh] bg-slate-200 justify-center items-center font-inter">
      <div className="card py-4 px-3 bg-white w-[375px] h-[500px] rounded-sm">
        <div>
          <h2 className="text-2xl font-bold">December 1, 2023</h2>
          <p className="common-text-color text-[14px]">
            {tasks.filter((task) => !task.completed).length} incomplete,{" "}
            {tasks.filter((task) => task.completed).length} completed
          </p>
        </div>
        <hr className="my-4 bg-[#D0D0D0]" />
        <div className="">
          <div className="input-container flex justify-between items-center pl-1 rounded-[8px] pr-4 border-[1px]  border-[#DBDEE9]">
            <div className="input flex flex-col flex-grow gap-1 ">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="e.g rest time"
                className="rounded-[4px] pl-3 pr-2 py-2 flex-grow focus:outline-none"
              />
            </div>
            <button onClick={handleAddTask} disabled={inputText.length < 1}>
              Add
            </button>
          </div>
          <div className="py-4 overflow-auto h-[350px]">
            <h2 className="font-bold my-2 common-text-color">Incomplete</h2>
            {tasks
              .map((task, index) => ({ ...task, originalIndex: index }))
              .filter((task) => !task.completed)
              .map((task) => (
                <label
                  key={task.originalIndex}
                  className="flex items-center space-x-3"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={task.completed}
                    onChange={() => handleTaskToggle(task.originalIndex)}
                  />
                  <span className="common-text-color font-medium">
                    {task.text}
                  </span>
                </label>
              ))}
            <h2 className="font-bold my-2 common-text-color">Completed</h2>
            {tasks
              .map((task, index) => ({ ...task, originalIndex: index }))
              .filter((task) => task.completed)
              .map((task) => (
                <label
                  key={task.originalIndex}
                  className="flex items-center space-x-3"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={task.completed}
                    onChange={() => handleTaskToggle(task.originalIndex)}
                  />
                  <span className="font-medium text-[#B9B9BE]">
                    {task.text}
                  </span>
                </label>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
