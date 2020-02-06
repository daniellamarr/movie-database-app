# TheSource Movie Database App

Frontend Deployed by netlify to [https://thesource-movie-db.netlify.com](https://thesource-movie-db.netlify.com)

Backend Deployed by heroku to [https://thesource-movie-database-app.herokuapp.com](https://thesource-movie-database-app.herokuapp.com) 


#### Branching Convention
All frontend-related code are checked off [master](https://github.com/daniellamarr/movie-database-app) branch. While all backend-related code are check off [backend](https://github.com/daniellamarr/movie-database-app/tree/backend) branch.
This is to prevent conflict on interests while pushing all our code in thesame repository.


#### Technologies Used

- NodeJS
- ReactJS
- Semantic UI
- Webpack and Babel


#### Tools Used
- Heroku Hosting for backend API
- Github Projects for tasks tracking / Project management
- Postgres Database


#### Frontend Routes

* Home - `/`
* User profile - `/userprofile`
* Single movie - `/movies/:movieId`
* Signup - `/signup`
* Login - `/login`


#### Backend Routes

* User can Signup - `POST /api/v1/auth/signup`

* User can Login - `POST /api/v1/auth/login`

* Get Latest movies - `GET /api/v1/movies`

* Get movies by a search query - `GET /api/v1/movies/search`

* Get Users Watchlist - `GET /api/v1/watchlist`

* Get a single movie by its ID - `GET /api/v1/movies/:movieID`

* Get user reviews for a movie by Its ID - `GET /api/v1/review`

* User can review a movie - `POST /api/v1/review`

* User can add a movie to their watchlist - `POST /api/v1/user/watchlist/add`

* User can remove a movie from their watchlist - `POST /api/v1/user/watchlist/remove`


#### Collaborators

- Daniel 
- Tega
- Timi
- Didun
- Arthur
- Benjamin

You can find the project board on [Github Project](https://github.com/daniellamarr/movie-database-app/projects/1)
