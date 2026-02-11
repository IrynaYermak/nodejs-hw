Node.js Homework — REST API for Notes and Authentication

This repository contains a full-featured RESTful API built with Node.js and Express, designed to manage user accounts, 
authentication, sessions, and a personal notes collection. The project demonstrates backend architecture, data validation, 
session management, secure authentication, and MongoDB integration.

Key Features

Authentication & Authorization
User registration with secure password hashing (bcrypt)

User login with credential validation

Session management using access & refresh tokens

Secure cookies for token storage (httpOnly, secure, sameSite)

Session refresh (/auth/refresh) and logout logic

Access control via authentication middleware


 
📝 Notes Management (Private Collection):
* Create, read, update, delete notes;
* Notes are tied to authenticated users;
* Each user can only access their own notes;
* Pagination and text filtering features;
* Full text search with MongoDB text index;
* Tag-based filtering;

Validation & Error Handling

* Input validation using celebrate / Joi
* Custom validation for ObjectId via mongoose
* Centralized error handling with http-errors
* 404 route handling

Technologies Used

Node.js	   -   Server-side runtime;
Express.js	-  Web framework;
MongoDB	NoSQL - database;
Mongoose ODM - (Object Document Mapper);
bcrypt	     - Password hashing;
celebrate/Joi - 	Request validation;
http-errors	 - Structured error handling;
cookie-parser	- Cookie handling;
dotenv	     - Environment configuration;
Render      -	Deployment.

What Was Implemented

 Protected routes via authentication middleware
  - Secure session handling with refresh logic
  - Validation for all API endpoints
  - Pagination and search / filter logic for notes
  - User-specific resource access
  - Error middleware and structured API responses
  - Deployment configuration ready

API Endpoints (Project Routes)

🔐 Auth Routes

POST	/auth/register	Create a new user account

POST	/auth/login	User login, issue tokens & session

POST	/auth/refresh	Refresh access/refresh tokens

POST	/auth/logout	Logout, invalidate session

📝 Notes Routes (Protected)

GET	/notes	Get all notes (with pagination & filters)

GET	/notes/:noteId	Get a single note

POST	/notes	Create a new note

PATCH	/notes/:noteId	Update a note

DELETE	/notes/:noteId	Delete a note
