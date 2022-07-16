# Movie app

A web application, that helps you find movies to watch

## Table of Contents

- [MVP](#mvp)
- [Stretch-Goals](#stretch-goals)
- [Technologies-used](#Technologies-used)
- [Models](#models)
- [User-Stories](#user-stories)


## MVP

- User can login
- User can create a watchList
- User can browse movies
- User can add a movie to their watchList
- User can remove a movie to their watchList
- User see a summary of a given movie
- User can able to delete their account

## Stretch Goals

- RAPID API intergation
- Likes and Reviews on Movies
- Able to compare WatchList to other users
- Able to select different platform and filter by them
- If users don't have any movies in common suggest movies they both might like

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

Movie{
    platform
    image: String,
    description: String
}

User{
    email: String,
    username,
    password,
    watchList,
}

## User stories
As an user, I want to be able to login using to access my personal WatchList
As a Admin, I want to be able to access and edit Users and Movies
As a Developer, I want to easily access the models and Data
As a User, I want to see a large list of movies that I can pick from
As a User, I want to be able to rate and review Movies
