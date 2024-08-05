import React, { useEffect, useState } from 'react'
import Task from '../components/Task'
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import Dropdwon from '../components/Dropdwon';
import axios from 'axios';
import TaskAddBox from '../components/TaskAddBox';
import Dropdown from '../components/Dropdwon';
import FilterTask from '../components/FilterTask';

function Dashboard() {
    // const [startDate, setStartDate] = useState(new Date());
    const [upcomingTasks, setUpcomingTasks] = useState([]);
    const [filterTask, setFilterTask] = useState(false);
    const [overdueTasks, setOverdueTasks] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

    useEffect(() => {
        getAllTasks();
    }, []);

    //Get all task
    const getAllTasks = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get('http://localhost:5000/api/tasks', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            const data = response.data;
            const upcomingTasks = [];

            // tasks organized by date into a single array
            Object.keys(data).forEach(date => {
                if (date !== 'overdue') {
                    upcomingTasks.push(...data[date]);
                }
            });

            setUpcomingTasks(upcomingTasks);
            setOverdueTasks(data.overdue || []);
            setIsFiltered(false);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };
    console.log("lllllllllllllllllllllllll", filterTask)
    //Filter task
    const handleFilter = async (status) => {
        if (status === 'All') {
            console.log("I love you...")
            getAllTasks()
            return;
        }
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`http://localhost:5000/api/tasks/filter?status=${status}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            setFilterTask(response.data);
            setIsFiltered(true); 
        } catch (error) {
            console.error('Error fetching filtered tasks:', error);
        }
    };

    return (
        <div className='ml-3 mx-auto px-4 mt-10 lg:px-[120px] lg:pr-[130px] mb-20'>
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-700">Add your Task</h2>
            </div>

            <TaskAddBox getAllTasks={getAllTasks} />

            <div className='border-t-2 mt-2 mb-3 border-gray-300'></div>

            {/* Filter */}
            <div className='flex justify-end'>
                <Dropdwon onFilter={handleFilter} />
            </div>

            {/* Filtered tasks - if filter add then orverdue and upcoming is hide*/}
            {isFiltered && filterTask.length > 0 && (
                <>
                    <div className='border-t-2 mt-2 mb-3 border-gray-300'></div>
                    <span className="grid justify-center text-lg lg:text-1xl font-bold text-blue-500 mb-3">Filtered Tasks</span>
                    <div className='border-t-2 mt-2 mb-3 border-gray-300'></div>
                    {filterTask.map(task => (
                        <FilterTask key={task._id} filterTask={task} />
                    ))}
                </>
            )}

            {/* Overdue tasks */}
            {!isFiltered && (
                <>
                    <div className='border-t-2 mt-2 mb-3 border-gray-300'></div>
                    <span className="grid justify-center text-lg lg:text-1xl font-bold text-red-500 mb-3">Overdue Tasks</span>
                    <div className='border-t-2 mt-2 mb-3 border-gray-300'></div>
                    {overdueTasks.map(task => (
                        <Task key={task._id} task={task} status={'overdue'} getAllTasks={getAllTasks} />
                    ))}
                </>
            )}

            {/* Upcoming tasks */}
            {!isFiltered && (
                <>
                    <div className='border-t-2 mt-2 mb-3 border-gray-300'></div>
                    <span className="grid justify-center text-lg lg:text-1xl font-bold text-green-500 mb-3">Upcoming Tasks</span>
                    <div className='border-t-2 mt-2 mb-3 border-gray-300'></div>
                    {upcomingTasks.map(task => (
                        <Task key={task._id} task={task} status={'upcoming'} getAllTasks={getAllTasks} />
                    ))}
                </>
            )}
        </div>
    );
}

export default Dashboard;