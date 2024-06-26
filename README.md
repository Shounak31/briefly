# URL Shortener

A full-stack URL shortener application built with Node.js, Express, MongoDB, and React. This project allows users to input a long URL and receive a shortened version that redirects to the original URL.

## Features

- Shorten long URLs.
- Redirect from short URL to original URL.
- User-friendly frontend interface.

## Technologies

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Vite, TailwindCSS
- **Other**: concurrently for running multiple scripts

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your local machine
- MongoDB instance running locally or on the cloud

### Installation

1. Clone the repository:

    ```bash
    mkdir <name-project-directory>
    git clone https://github.com/Shounak31/briefly.git
    cd <name-project-directory>
    ```

2. Install backend dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:

    ```bash
    cd ../frontend
    npm install
    ```

4. Install `concurrently` at the root level:

    ```bash
    cd ..
    npm install concurrently --save-dev
    ```

5. Configure Environment Variables:

    Create a `.env` file in the `backend` directory with the following content:

    ```plaintext
    MONGO_URL='mongodb://localhost:27017/urlShortener'
    ```

6. Run the application:

    From the root directory, run the following command to start both the frontend and backend:

    ```bash
    npm start
    ```

## Usage

Open your browser and navigate to:

```arduino
http://localhost:3000
```

Enter a long URL in the input box and click the "Shorten" button.

Copy the generated short URL and paste it into a new browser tab to test the redirection.

## Project Structure

```java
url-shortener/
├── backend/
│   ├── index.js
│   ├── connect.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
├── package.json
```
##VideoDemo

Watch the video demonstration of the URL shortener project:

![Watch the Video](/frontend/public//demo.mp4)

Click on the video to play it.

## Libraries Used

### Backend

- **Express**: Web framework for Node.js to handle HTTP requests.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Shortid**: Library to generate short, unique IDs for shortened URLs.
- **Cors**: Middleware to enable Cross-Origin Resource Sharing.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation front-end tool that is fast, scalable, and easy to configure.
- **TailwindCSS**: Utility-first CSS framework for quickly building custom designs without writing CSS.
- **Axios**: Promise-based HTTP client for making requests to the backend API.

