import {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30PM',
        reminder:true
    },
    {
        id: 2, 
        text: 'Grocery Shopping',
        day: 'Feb 5th at 3:30PM',
        reminder:false
    },
    {
        id: 3, 
        text: 'Interview',
        day: 'Feb 7th at 10:30AM',
        reminder:true
    },
])

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
} 
  return (
    <div class="container">
     <Header />
     {tasks.length > 0 ?(
     <Tasks tasks={tasks} onDelete={deleteTask}/>
     ) : ('No Tasks To Show')}
    </div>
  );
}

export default App;
