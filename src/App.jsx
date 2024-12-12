import 'remixicon/fonts/remixicon.css'
import { useState } from 'react';

function App(){

  const [task,setTask] = useState("")

  const handleChange=(e )=>{
    const {value} = e.target;
    
  }

  const addTask=()=>{
    console.log(value);
    
    setTask(value);
  }

  return (
    <div className="h-screen bg-gray-300 flex flex-col gap-12">
     <h1 className="text-center text-white text-xl font-bold bg-gray-400 py-4"> Schedule & Manage Your Tasks efficiently </h1>
     <form className="flex flex-col gap-6 w-72 py-6 px-8 mx-auto bg-gray-400 rounded-lg shadow-xl shadow-white contrast-150">
       <input 
        onChange={handleChange}
        className="rounded p-2 bg-gray-200 font-semibold"
        placeholder="enter task here..."
       />
       <button
         onSubmit={addTask}
         type="submit"
         className="bg-blue-500 w-fit mx-auto px-4 py-3 rounded-md font-semibold text-white hover:pointer hover:scale-[.8] shadow-md shadow-purple-300"
         > Add to List 
         </button>
     </form>
     
     <table className=" min-w-[500px] mx-auto shadow-xl shadow-yellow-200 contrast-50 ">
        <thead className="bg-white text-xl">
          <th className="py-2">S.N.</th>
          <th>Task Name</th>
          <th>Action </th>
        </thead>
        <tbody>
          <tr className="text-center text-2xl text-purple-700 font-semibold">
            <td>1</td>
            <td>{task}</td>
            <td className='text-2xl font-bold flex gap-2 justify-center'>
              <i className="ri-file-edit-line mr-2 text-green-600"></i>
              <i className="ri-delete-bin-line text-red-700"></i>
            </td>
          </tr>
        </tbody>
     </table>
    </div>
  )
}




export default App