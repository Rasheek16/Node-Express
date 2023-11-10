# Node-Express
# Movie Backend API

A simple Node.js backend project for managing a collection of movies.

## Overview

This project provides a basic backend API to perform CRUD operations on a collection of movies. Each movie has properties including `id`, `title`, and `year`.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm (Node Package Manager) installed

## Installation

1. Clone the repository:

   ```bash
   git@github.com:Rasheek16/Node-Express.git


2. Navigate to the project directory:
   
   ```bash
   cd Node-express


4. Install dependencies:

   ```bash
   npm install


## API Endpoints

1. Save Movie: POST /save
   Save a new movie to the collection.
   Request body:
   ```json
   {
      "title": "Movie Title",
     "year": 2022
   }
   ```

2. Form Action: GET /movie/form/:id
   Fetch details for a specific movie ID to be used in a form.
   Example request:
   ```bash
   GET /movie/form/1
   ```

3. Remove Action: DELETE /movie/remove/:id
   Remove a movie from the collection by its ID.
   Example request:
   ```bash
   DELETE /movie/remove/2

4. List Action: GET /movie/list
   Fetch the list of all movies.
   Example request:
   ```bash
   GET /

# Contributing
Contributions are welcome! If you have any suggestions, bug reports, or improvements, please open an issue or create a pull request.

