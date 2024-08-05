import React, { useState } from 'react'
import axios from 'axios'
import { BsCheckCircleFill, BsPencilFill, BsXCircleFill } from "react-icons/bs";
import TaskAddBox from './TaskAddBox';
import TaskEditBox from './TaskEditBox';


function Task({ task, status, getAllTasks }) {
    const [isOpenEditBox, setIsOpenEditBox] = useState(false);
    const [taskId, setTaskId] = useState('');

    const convertDate = new Date(task.dueDate).toISOString().split('T')[0];

    //Edit task
    const completeTask = async (taskId) => {
        const token = localStorage.getItem("token");
        // const complete = true; 

        const updatedTask = {
            completed : true,
            taskId:taskId
        };
        try {
            const response = await axios.post(`http://localhost:5000/api/tasks/`,updatedTask, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data.msg);
            // setError('');
            getAllTasks();

        } catch (error) {
            console.log(error)
            setError(error.response.data.msg || 'Something went wrong..');
        }
    };

    // Delete task
    const deleteTask = async (taskId) => {
        const token = localStorage.getItem("token");
        try {
            await axios.delete(`http://localhost:5000/api/tasks/${taskId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Task successfully removed');
            getAllTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleEditClick = () => {
        setTaskId(task._id); // Set the taskId to the current task's ID
        setIsOpenEditBox(!isOpenEditBox); // Toggle the visibility of the edit box
        console.log(task._id)
    };
    return (
        <div>
            <article className={`px-3 py-3 mt-3 text-base rounded-lg border ${status === 'upcoming' ? 'bg-green-200' : 'bg-red-300'}`}>

                <footer className="flex justify-between items-center mb-2">

                    <div className="flex items-center">
                        <p className="text-sm text-gray-700 font-semibold inline">
                            <span>Due Date -{convertDate} </span>
                        </p>
                    </div>

                </footer>

                <p className="text-gray-700 ">{task.description} <span className='text-xs'></span></p>

                <div className='flex space-x-4 mt-2'>
                    <button onClick={() => completeTask(task._id)}
                    type="button" 
                    className="flex items-center text-sm text-gray-600 hover:underline font-medium">
                        <div className='mr-1'>
                            <BsCheckCircleFill />
                        </div>
                        Complete
                    </button>

                    <button onClick={handleEditClick}
                        type="button"
                        className="flex items-center text-sm text-gray-600 hover:underline font-medium">
                        <div className='mr-1'>
                            <BsPencilFill />
                        </div>
                        Edit
                    </button>

                    <button onClick={() => deleteTask(task._id)} type="button" className="flex items-center text-sm text-red-500 hover:underline font-medium">
                        <div className='mr-1'>
                            <BsXCircleFill />
                        </div>
                        Remove
                    </button>
                </div>
            </article>

            <div>
            {isOpenEditBox && <TaskEditBox taskId={taskId} getAllTasks={getAllTasks} />}
                {/* {!isOpenEditBox ?  <TaskEditBox taskId={task.id} getAllTasks={getAllTasks} /> : ''} */}
                {/* {isOpenEditBox && <TaskEditBox getAllTasks={getAllTasks} />} */}
            </div>
          
        </div>
    )
}

export default Task