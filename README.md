# AuctionPe Application

This repository contains the source code for the AuctionPe application. It is a full-stack application that includes a backend built with Node.js and Express, and a frontend built with React.

## Table of Contents

- [AuctionPe Application](#auctionpe-application)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Setting Up the Application](#setting-up-the-application)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
  - [Running the Application](#running-the-application)
  - [Database Setup](#database-setup)
  - [Code Structure](#code-structure)

## Prerequisites

- Node.js (>= 14.x)
- MySQL (>= 5.7)

## Setting Up the Application

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/bhupendrasingh-rajput/auctionpe-assignment
    cd AuctionPe/backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your environment variables:
    ```env
    JWT_SECRET=your_jwt_secret
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=auctionpe_db
    ```

4. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```sh
    cd ../frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm start
    ```

## Running the Application

1. Ensure the MySQL server is running and the database is set up (see Database Setup).
2. Start the backend server (as described above).
3. Start the frontend server (as described above).
4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Database Setup

Run the following SQL script to set up the MySQL database:

```sql
-- Create the database
CREATE DATABASE auctionpe_db;

-- Use the newly created database
USE auctionpe_db;

-- Create the users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Create the sessions table
CREATE TABLE sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    start_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create the actions table
CREATE TABLE actions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id INT NOT NULL,
    action_type VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES sessions(id)
);


**Code Structure
**
**Backend**
controllers/: Contains controller files for handling API requests.
models/: Contains model files for interacting with the database.
routes/: Contains route definitions for the API endpoints.
config/: Contains configuration files, such as the database configuration.
index.js: Entry point for the backend server.

**Frontend**
src/components/: Contains React components used throughout the application.
src/apis/: Contains API service files for making HTTP requests to the backend.
src/pages/: Contains React components representing different pages of the application.
src/App.js: Main application component.
src/index.js: Entry point for the frontend application.
