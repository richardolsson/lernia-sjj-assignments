## Component library
Joy UI: https://mui.com/joy-ui/getting-started/installation/

## Startup instructions

### Database
Start your MongoDB database, e.g. with mongod --dbpath ./data

## Features

### User accounts
* Create account
  * Database
    * User model
  * Form on a page
    * Input fields
    * Submit button that makes API request
  * API route for creating account
    * Handle data from request
    * Hash password
    * Store in database
* Log in
  * API endpoint
    * Parse input
    * Validate password
      * Find user by email
      * Compare passwords (hashed)
    * Set JWT in cookie
  * Login form
* Log out
* Recognize user when logged in
  * Load user data (API)
    * React code to load from API (useEffect)
    * API route to return user data
      * Verify cookie
      * Get user ID from cookie
      * Get user data from database
  * Show already loaded data (without loading again)

### Movie listing
* List movies
  * Load movies from API (on client, useEffect)
  * Render list of movies
  * Link each movie to separate page
* List screenings per movie

### Book seats
* Pick seats (at screening)
* Payment
* Order confirmation