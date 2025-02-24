# Resignation Management System

The Resignation Management System is a full-stack application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows employees to submit resignation requests and HR personnel to manage these requests, including approvals, rejections, and scheduling exit interviews.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Usage](#usage)
  - [Register/Login](#registerlogin)
  - [Employee Dashboard](#employee-dashboard)
  - [HR Dashboard](#hr-dashboard)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication and role-based access (HR and Employee).
- Employees can submit resignation requests with a specified last working day and reason.
- HR can review, approve, or reject resignation requests.
- Automated email notifications for resignation status updates.
- Exit interview questionnaires for employees upon resignation approval.

## Technologies Used
- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Email Notifications**: Nodemailer
- **Holiday Checks**: Calendarific API

## Setup Instructions

### Backend
1. **Navigate to the Backend Directory:**
   ```sh
   cd backend
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Set Up Environment Variables:**
   Create a `.env` file in the backend directory and add the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   EMAIL=your_email@example.com
   EMAIL_PASSWORD=your_email_password
   CALENDARIFIC_API_KEY=your_calendarific_api_key
   PORT=8080
   ```
4. **Start the Backend Server:**
   ```sh
   npm start
   ```
   Alternatively, for development with automatic restarts:
   ```sh
   npx nodemon server.js
   ```

### Frontend
1. **Navigate to the Frontend Directory:**
   ```sh
   cd frontend
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Start the Frontend Development Server:**
   ```sh
   npm start
   ```

## Usage

### Register/Login
- Register as an employee or HR.
- Log in using your credentials.

### Employee Dashboard
- Submit a resignation request.
- Fill out the exit interview questionnaire if your resignation is approved.

### HR Dashboard
- Review and manage resignation requests.
- Approve or reject requests and set exit dates.
- View completed exit interview questionnaires.

## Deployment
The application is deployed and accessible via the following links:

- **Frontend**: [https://resignationio-oce0t6690-jatin-suryawanshis-projects.vercel.app//login](#)
- **Backend**: [Deployed Backend Link](#)

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/new-feature
   ```
3. Commit your changes:
   ```sh
   git commit -am 'Add new feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature/new-feature
   ```
5. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

