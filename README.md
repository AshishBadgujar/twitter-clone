# Twitter Clone

This repository contains a Twitter clone project built using React.js, Webpack, Apollo Client, GraphQL Apollo Server, and MongoDB. The entire application is dockerized for easy deployment, and a Docker Compose file is provided to simplify the setup process.

## Installation

To get started with the Twitter Clone project, follow the instructions below:

### Prerequisites

- Docker and Docker Compose should be installed on your machine.

### Cloning the Repository

1. Clone this repository to your local machine using the following command:
   ```
   git clone https://github.com/your-username/twitter-clone.git
   ```
2. Navigate to the cloned repository directory:
   ```
   cd twitter-clone
   ```

### Running the Application

1. Open a terminal or command prompt and navigate to the project's root directory.
2. Build the Docker containers using Docker Compose:
   ```
   docker-compose build
   ```
3. Start the Docker containers:
   ```
   docker-compose up
   ```
4. Once the containers are up and running, you can access the application by opening your browser and visiting `http://localhost:3000`.

## Project Structure

The project structure is organized as follows:

```
├── backend
│   ├── src
│   │   ├── resolvers
│   │   ├── models
│   │   ├── schema
│   │   ├── index.js
│   │   └── ...
│   └── Dockerfile
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── ...
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── styles
│   │   ├── App.js
│   │   └── ...
│   └── Dockerfile
├── docker-compose.yml
└── ...
```

- The `backend` directory contains the backend codebase, including the GraphQL resolvers, database models, and schema definitions.
- The `frontend` directory contains the frontend codebase, including React components, pages, and styles.
- The `docker-compose.yml` file defines the Docker services required for the application, including the frontend, backend, and MongoDB.
- The `Dockerfile` is used to build the Docker image for the application.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Webpack: A module bundler used to bundle the frontend code.
- Apollo Client: A powerful GraphQL client for fetching and managing data in the frontend.
- GraphQL Apollo Server: A GraphQL server implementation based on Apollo Server.
- MongoDB: A popular NoSQL database for storing application data.
