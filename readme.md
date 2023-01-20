# API Restaurantes
### Features
* Public can see and edit all data from the database
### Installation Guide
* Clone this repository [here](https://github.com/EdgarMartinezEsqueda/APIRestaurant.git).
* Run npm install to install all dependencies.
* Create an .env file in your project root folder and add your variables (HOST, USER, PASSWORD, DBNAME).
* Copy and paste the sql script (**database/db.sql**) into your mysql database.
### Usage
* Run npm start:dev to start the application.
* Connect to the API using Postman, RapidAPI, etc. on port 3000.
### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| Task 1 |
| GET | /api/restaurantes/ | Get all restaurants in the DB |
| GET | /api/restaurantes/:id | Get only one restaurant |
| POST | /api/restaurantes/ | Add a new restaurant to the DB |
| PUT | /api/restaurantes/ | To edit the details of a single restaurant |
| DELETE | /api/restaurantes/:id | To delete a single restaurant |
| Task 2 |
| GET | /restaurants/statistics?latitude&longitude&radius | Return statitics depending on the latitude, longitude and radius  |
### Technologies Used
* [NodeJS](https://nodejs.org/) 
* [ExpressJS](https://www.expresjs.org/) 
* [MYSQL](https://www.mongodb.com/) 
* [Squelize](https://mongoosejs.com/) 
### License
This project is available for use under the MIT License.