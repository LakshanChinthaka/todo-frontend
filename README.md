# To-Do List Application (Frontend)

## Description

This is a simple web application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to create, read, update, and delete (CRUD) tasks. The application includes user authentication using JWT, task management features, and a responsive user interface.

## Features

- **User Authentication**: Register and login functionality with JWT for secure authentication.
- **Task Management**: Add, view, update, and delete tasks.
- **Grouping and Filtering**: Tasks are grouped by due date, and overdue tasks are displayed separately.
- **Responsive UI**: A user-friendly and responsive interface built with React and styled using Tailwind CSS or styled-components.
- **Deployment**: The application can be deployed on platforms such as Heroku or Vercel.

## Technologies Used

- **Frontend**: React, Tailwind CSS (or styled-components)
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Development Tools**: Nodemon, Axios, bcryptjs, dotenv

## Images
![image](https://github.com/user-attachments/assets/730f7c84-d757-4a7a-932d-3e3d112160c7)


![image](https://github.com/user-attachments/assets/f45baa8f-b384-4288-b742-ea8285968318)


![image](https://github.com/user-attachments/assets/d3ad84d2-9929-48a6-8590-a2245c4e9009)
  
### Setup

1. **Clone the repository**:

    ```sh
    git clone https://github.com/yourusername/frontend.git
    ```
    
The frontend application is located in the `todo-frontend` directory. To run it:

1. **Navigate to the `todo-frontend` directory**:

    ```sh
    cd todo-frontend
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Run the development server**:

    ```sh
    npm start
    ```
   ## API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login an existing user.

### Tasks

- **GET /api/tasks**: Retrieve all tasks for the authenticated user.
- **POST /api/tasks**: Add a new task.
- **PUT /api/tasks/:id**: Update an existing task by ID.
- **DELETE /api/tasks/:id**: Delete a task by ID.
- **GET /api/tasks/filter**: filter date by compltete and incomplete.

## Backend

## To-Do List Application (Backend)
   <a href="https://github.com/LakshanChinthaka/todo-backend.git">To-Do List Application (Backend)</a> 

## Deployment

To deploy the application, you can use platforms like Heroku or Vercel. Follow their respective documentation to set up deployment pipelines for both the backend and frontend.

## Contributing

Feel free to open issues or submit pull requests. Contributions are welcome!


## Acknowledgements

- Inspired by modern web application practices.
- Using MERN stack to demonstrate full-stack development.

---

Feel free to adjust any sections to better fit your project's needs or to include additional details about your setup or features.
