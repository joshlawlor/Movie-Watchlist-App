# Movie app

A web application that helps you find movies to watch

## Table of Contents

- [MVP](#mvp)
- [Stretch-Goals](#stretch-goals)
- [Technologies-used](#Technologies-used)
- [Models](#models)
- [User-Stories](#user-stories)
- [Wireframes](#Wireframes)


## MVP

- User can log in
- User can create a watchList
- Users can browse movies
- Users can add a movie to their watchList
- Users can remove a movie to their watchList
- User see a summary of a given movie
- Users can able to delete their account
- Able to select different platforms

## Stretch Goals

- RAPID API integration
- Likes and Reviews on Movies
- Able to compare WatchList to other users
- If users don't have any movies in common, suggest movies they both might like

## Technologies used

#### Front-End

- React.js
- Javascript
- CSS
- HTML
- API integration

#### Back-End:

- MongoDB
- mongoose
- Node.js
- Express.js
- JavaScript


## Models

1. Movie{
    genre: String,
    platform: String,
    image: String,
    summary: String
}

2. User{
    email: String,
    username: String,
    password: String,
    watchList: []
}

## User stories
- As a user, I want to be able to login using to access my WatchList
- As an Admin, I want to be able to access and edit Users and Movies
- As a Developer, I want to access the models and Data easily
- As a User, I want to see an extensive list of movies that I can pick from
- As a User, I want to be able to rate and review Movies
- As a user, I want to see the movies I have favorited to watch
- As a User, I want to update my list of movies to watch
- As a User, I want to add friends and compare/contrast movies we want to watch

## Wireframes
![wireframe](./wireframes/image.png "wireframe")