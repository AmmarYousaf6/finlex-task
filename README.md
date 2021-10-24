<!-- @format -->

# Finlex Customer Service

## Installation

Install [Node](https://nodejs.org/en/) & [MySql](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) & [Angular](https://angular.io/guide/setup-local) & [Angular Material](https://material.angular.io/guide/getting-started) & [Docker](https://docs.docker.com/compose/gettingstarted/)

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

## Hosting Live

Finlex customer service is up and running on URL https://finlex-app.herokuapp.com/customer-service

## Run Server

Run the following commands to run server

- npm start

  - Node - http://localhost:3000 (This should start the Client side as well. Plese check your browser http://localhost:3000/customer-service)

- ng serve
  - Angular - http://localhost:4200/customer-service

## Docker

Run the envrironment on docker by running the following commands on root directory.

- cd finlex-task
- docker build -t finlex/node-app -f Dockerfile .
- docker run -d -it -p 3005:3000/tcp --name node-app finlex/node-app:latest
- Server should be running on localhost:3005

## Test

Run the following commands to run test cases

- npm test

## API Documentation

     - https://documenter.getpostman.com/view/1793528/UV5ahGWs

## Video

[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://drive.google.com/file/d/1Ev80_UC-Tiyw0_Tl4vKIu7Ih1PPYLMed/view?usp=sharing)

## Architecture

The backend has been developed by following the MVC Architecture. MVC is an architectural pattern consisting of three parts: Model, View, Controller. Model: Handles data logic. View: It displays the information from the model to the user. Controller: It controls the data flow into a model object and updates the view whenever data changes.
Once the client app is ready, Client will accept data from Server, and server will send data back to the client.

## Code Format & Linters used

     - EsLint
     - Prettier

## Tools and Technologies

    - Node ^14
    - Express
    - Angular && Material UI Design
    - MySql
    - Jest
    - Prettier
    - SequalizeJs, TypeOrm
    - Docker
    - Heroku
    - PostgreSql for production setup
