# Boilerplate setup for SQL database, Express, React, Node.js 

This repository provides a boilerplate setup for building a web application using SQL database, Express, React, and Node.js. It includes integration with Sequelize as the SQL ORM (Object-Relational Mapping) library and Tailwind CSS for frontend styling, along with a logger functionality.

## Features

- Integration of SQL database using Sequelize: Sequelize is a powerful ORM that provides an easy way to interact with SQL databases. This boilerplate is pre-configured to work with Sequelize, allowing you to define models, query the database, and perform migrations effortlessly.

- Express.js: Express is a popular web application framework for Node.js that simplifies the process of building robust APIs and web servers. The boilerplate includes an Express setup with middleware for handling requests and responses.

- React: React is a widely-used JavaScript library for building user interfaces. This boilerplate provides a React setup with a basic file structure and a sample component to help you get started quickly.

- Node.js: Node.js is a JavaScript runtime that allows you to build scalable and efficient server-side applications. This boilerplate leverages Node.js as the server runtime for your application.

- Tailwind CSS: Tailwind CSS is a utility-first CSS framework that helps you quickly build modern and responsive user interfaces. The boilerplate includes Tailwind CSS integration, enabling you to style your frontend components easily.

- Logger Functionality: A logging system is set up in this boilerplate to help you track and debug application events. It provides logging functions that can be used to log messages, warnings, and errors, aiding in application monitoring and troubleshooting.

## Getting Started

1. Clone the repository:
    ```
    git clone https://github.com/your-username/boilerplate-sql-express-react-node.git
    ```

2. Change into the project directory:
    ```
    cd boilerplate-sql-express-react-node
    ```

3. Install the dependencies:
    - Change into the backend directory:
      ```
      npm install
      ```
    - Change into the frontend directory:
      ```
      npm install
      ```

4. Set up the SQL database in backend folder:
    - Create a DB Config File
      - Create a `/backend/db/config.js` files
      - Copy the below code inside it and fill in the appropriate details
        ```
        exports.dbConfig = {
          database: "<your-database-name>",
          host: "<your-host-name>",
          username: "<your-db-account-username>",
          password: "<your-db-account-password>",
          port: <your-db-port>,
        };
        ```

5. Run backend and frontend
    - Open two terminals, one for frontend and one for backend
      - In backend
        ```
        npx nodemon
        ```
      - In frontend
        ```
        npm start
        ```

## Project Structure

The project structure is organized as follows:

- `backend`: Contains the server-side code built with Node.js and Express.js.
  - `db/config.js`: Contains the configuration files for the application, such as database settings.
  - `logs`: Contains the logger config for handling api logs.
- `frontend`: Contains the client-side code built with React.
  - `tailwind.config.js`: Contains tailwind configuration 

## Contributing

Contributions to this boilerplate setup are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on GitHub.

## License

This boilerplate setup is open-source and released under the [MIT License](LICENSE). Feel free to use it for personal or commercial projects.