import React, {useState} from "react"; 

function ToDoList(){
    const [tasks,setTasks]=useState(["entrainemetn","noom","rami"]);
    const [newTask, setNewTask]=useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }

    }
    function deleteTask(index){
        const updateTasks=tasks.filter((element,i)=> i !==index);
        setTasks(updateTasks);

    }
    
    function updateTask(index){

    }
    return (<div className="todo-list">
        <h1>Todo List</h1>
        <div>
            <input type="text" placeholder="Ecrire votre task" value={newTask}
            onChange={handleInputChange} />
            <button
                className="add-button" onClick={addTask}>Add
            </button>
        </div>
        <ol>
            {tasks.map((task, index) => (
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                    className="delete-button"
                    onClick={()=> {deleteTask(index)}}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ol>
    </div>

    );
}
export default ToDoList
