import React, { useState } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TaskEditBox({taskId,getAllTasks}) {
    const [startDate, setStartDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [error, setError] = useState("")

    const onChangeDescription = e => {
        setDescription(e.target.value);
    };

    // edit task 
    const onSubmit = async e => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const uid = localStorage.getItem("uid");

        //Date and description validate
        const currentDate = new Date();
        const previousDate = new Date(currentDate);
        previousDate.setDate(currentDate.getDate() - 1);

        if(startDate < previousDate ){
            console.log("The selected date is in the past. Please choose a future date.")
            setError("The selected date is in the past. Please choose a future date.")
            return
        }
        if(description === ""){
            console.log("ory... Please enter a task")
            setError("Sory... Please enter a task")
            return
        }

        // const taskId = '66afad402ecba09819b72960';
        const updatedTask = {
            description,
            dueDate: startDate,
            taskId:taskId
        };
        try {
            const response = await axios.post(`http://localhost:5000/api/tasks/`,updatedTask, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data.msg);
            setDescription('')
            setError('');
            getAllTasks();

        } catch (error) {
            console.log(error)
            setError(error.response.data.msg || 'Something went wrong..');
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} className="mb-6">
                <div className="py-2 px-4 mb-2 mt-3 bg-white rounded-lg rounded-t-lg border border-gray-300">
                    <label htmlFor="comment" className="sr-only">Your Task</label>
                    <textarea id="comment" rows="2"
                        maxLength={5000}
                        value={description}
                        onChange={onChangeDescription}
                        className="px-0 w-full max-h-[300px] text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                        placeholder="Write a task..." required>
                    </textarea>
                </div>

                {/* Date picker */}
                <span className='text-gray-800 font-semibold'>New Date</span>
                <div className="relative">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="MM-dd-yyyy"
                        className="bg-gray-50 border max-w-[300px] mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-2 p-2.5"
                        placeholderText="Select date"
                    />
                </div>

                <button type="submit"
                    className="items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700  hover:bg-blue-800 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
                    Edit Task
                </button>
                <button type="submit"
                    className="items-center ml-3 py-2.5 px-4 text-xs font-medium text-center text-white bg-red-500 hover:bg-red-600 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
                    Close
                </button>
            </form>
        </div>
    )
}

export default TaskEditBox