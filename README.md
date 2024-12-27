# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers:  lack of error handling for invalid inputs.

The `bug.js` file shows a route that fetches a user by ID.  However, it fails to handle cases where the `userId` is invalid (e.g., not a number, out of bounds).

The `bugSolution.js` file provides a corrected version with proper error handling, preventing crashes and providing informative responses to clients.

## How to Reproduce the Bug

1. Clone the repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js`.  
4. Send a request to `/users/abc` or `/users/1000` (assuming a smaller user array).

## How to Fix the Bug

Refer to the `bugSolution.js` file for a corrected version that gracefully handles invalid user IDs using proper error handling and appropriate status codes.