# Backend Branch for The Source Movie DB App

## Getting Started
Clone the Repo.
-------------
- Clone the Backend Branch by running the following command:
`git clone -b backend https://github.com/daniellamarr/movie-database-app.git` in your terminal.

## Prerequisites
The following tools will be needed to run this application successfully:
* Node v12.14 or above
* Npm v6.13 or above

## API Endpoints

## Installation
**On your Local Machine**
- Create a PostgreSQL Database for the App
- Create a `.env` file from `.env.example` and modify the *DATABASE_URL* and Add a *JWT_SECRET*
- Go to **https://www.themoviedb.org/**, Register and Get an API key
- Add your API key to *MOVIE_DB_API_KEY* in your `.env` file 
- Run `npm install` to install all dependencies
- Run `npm run dev` to start the app (development)
- Access endpoints on **http://localhost:7000**
- To Access API Docs navigate to **http://localhost:7000/api-docs**
