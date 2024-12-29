import 'remixicon/fonts/remixicon.css'
import { useState } from 'react';

function App(){
  const [inputValue,setInputValue] = useState("")
  const [task,setTask] = useState([])
  const [editIndex,setEditIndex]=useState(null)  //track of index of task being updated

  const removeTask=(index)=>{
    const backup=[...task]    //store existing array
    backup.splice(index,1)    //delete only target array
    setTask(backup)    //restore rest array
  }
  
  const editTask=(index)=>{
    setInputValue(task[index])   //get editing task in input
    setEditIndex(index)         //update index
  }
  
  const handleChange=(e )=>{
    const {value} = e.target;
      setInputValue(value);
  }
  
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!inputValue){
      alert("please enter a task")
      return;
    }
    
    // if editing ..update old task otherwise..add new task
    if(editIndex !==null){
      // update target task: method 1
      // task[editIndex] = inputValue;

      // update target task: method 2
      // let updatedArr = [...task.slice(0,editIndex), inputValue, ...task.slice(editIndex+1)];
      // setTask(updatedArr)

      // update target task: method 3
      // const updatedTask = task.map((item,index)=>
      //    index === editIndex ? inputValue : item
      // )
      // setTask(updatedTask);

      // update target task: method 4
      task.splice(editIndex,1,inputValue )
    }else{
      setTask([
        ...task,    //store old tasks
        inputValue   //add new task
      ])
    }

    

    // if(updateTask){
      
    //   // update the target task on submit
    // const editedTask=  task.map((allTask,i)=>{
    //     if(i === task.indexOf(taskText)){
    //       return inputValue;  //update task withnew input value
    //     }else{
    //       return allTask;    //otherwise keep all task as before
    //     } 
    //   })
    // setTask(editedTask);  
    // updateTask = false;
    // }else {
    //   setTask([
    //     ...task,    //store old tasks
    //     inputValue   //add new task
    //   ])   
    // }
    
    setInputValue('')  //empty input field after edit/add task
  }


  return (
    <div className="h-screen bg-gray-300 flex flex-col gap-12">
     <h1 className="text-center text-white text-xl font-bold bg-gray-400 py-4"> Schedule & Manage Your Tasks Efficiently </h1>
     <form
       onSubmit={handleSubmit}
       className="min-w-[500px] flex flex-col gap-6 w-72 py-6 px-8 mx-auto bg-gray-400 rounded-lg shadow-xl shadow-white contrast-150">
       <input 
          onChange={handleChange}
          value={inputValue}
          className="rounded p-2 bg-gray-200 font-semibold"
          placeholder="enter task here..."
       />
       <button
         type="submit"
         className="bg-blue-500 w-fit mx-auto px-4 py-3 rounded-md font-semibold text-white hover:pointer hover:scale-[.8] shadow-md shadow-purple-300"
         > Add to List 
         </button>
     </form>
     
     <table className=" min-w-[500px] mx-auto shadow-xl shadow-yellow-200 contrast-50 ">
        <thead className="bg-white text-xl">
          <tr>
            <th className="py-2">S.N.</th>
            <th>Task Name</th>
            <th>Action </th>
          </tr>
        </thead>
        <tbody>
          {
            task.map((item,i)=>(
              <tr 
                key={i}
                className={`text-center text-2xl text-purple-700 font-semibold ${i%2 !== 0 ? 'bg-white' : ''}`}>
                <td>{i+1}</td>
                <td className='py-1'>{item}</td>
                <td className='text-2xl font-bold flex gap-2 justify-center'>
                  <i onClick={()=>editTask(i)} className="ri-file-edit-line mr-2 text-green-600"></i>
                  <i onClick={()=>removeTask(i)} className="ri-delete-bin-line text-red-700"></i>
                </td>
              </tr>
            ))
          }
        </tbody>
     </table>
    </div>
  )
}




export default App