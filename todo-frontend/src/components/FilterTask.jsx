import React from 'react'
import { BsCheckCircleFill, BsPencilFill, BsXCircleFill } from "react-icons/bs";

function FilterTask({filterTask}) {
    const convertDate = new Date(filterTask.dueDate).toISOString().split('T')[0];
  return (
    <div>
            <article className="px-3 py-3 mt-3 text-base rounded-lg border bg-blue-200">

                <footer className="flex justify-between items-center mb-2">

                    <div className="flex items-center">
                        <p className="text-sm text-gray-700 font-semibold inline">
                            <span>Due Date -{convertDate} </span>
                        </p>
                    </div>

                </footer>

                <p className="text-gray-500 ">{filterTask.description}<span className='text-xs'>(2024/10/5)</span></p>

                
            </article>

            <div>
              
            </div>
          
        </div>
  )
}

export default FilterTask