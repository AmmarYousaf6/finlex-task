<!-- @format -->

# Finlex Customer Service

## Installation

Install [Node](https://nodejs.org/en/) & [MySql](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) & [Angular](https://angular.io/guide/setup-local) & [Docker](https://docs.docker.com/compose/gettingstarted/)

## Usage

After installation, clone the repository and run the following commands in terminal

    - cd finlex-task && npm install (for Server Side)
    - cd finlex-task/client && npm install (for Client Side)

##Database Connection

    - SequalizeJs (ORM) is being used.
    - Create a new database with the name of finlex in mySql.
    - Create .env file in finlex-task folder and add the following environment variables.

      DB_HOST={YOUR_LOCALHOST_URL}
      DB_USER={YOUR_DB_USERNAME}
      DB_PASSWORD={YOUR_DB_PASSWORD}
      DB_DATABASE={YOUR_DB_NAME}
      NODE_ENV=production

    - Note: Once you provide the correct credentials, a new table with respecitve columns will be created automatically with the name of products.

## Run Server

Run the following commands to run server

- npm start
  - Node - http://localhost:3000
  - Angular - http://localhost:4200/customer-service

## Test

Run the following commands to run test cases

- npm test

## API Documentation

     - https://documenter.getpostman.com/view/1793528/UV5ahGWs

## Video

[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://drive.google.com/file/d/14WXzU1FgxAKe6w2YZRquUbEvAsdEVvKK/view?usp=sharing)

## Architecture

The backend has been developed by following the MVC Architecture. MVC is an architectural pattern consisting of three parts: Model, View, Controller. Model: Handles data logic. View: It displays the information from the model to the user. Controller: It controls the data flow into a model object and updates the view whenever data changes.
Once the client app is ready, Client will accept data from Server, and server will send data back to the client.

## Code Format & Linters used

     - EsLint
     - Prettier

## Tools and Technologies

    - Node ^14
    - Express
    - Angular
    - MySql
    - Jest
    - Prettier
    - SequalizeJs, TypeOrm
    - Docker
    - Heroku
    - PostgreSql for production setup
