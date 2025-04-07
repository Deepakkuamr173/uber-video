# /users/register Endpoint Documentation

## Description
The `/users/register` endpoint is used to register a new user in the system. It receives user details, validates the input, hashes the password securely, creates the user in the database, and returns an authentication token along with the created user data upon successful registration.

## HTTP Method

`POST`

## Endpoint

`/users/register`

## Request Data

The endpoint expects a JSON payload with the following structure:

```json
{
  "fullname": {
    "firstname": "string (required, minimum 3 characters)",
    "lastname": "string (optional, if provided, minimum 3 characters)"
  },
  "email": "string (required, valid email format, minimum 5 characters)",
  "password": "string (required, minimum 6 characters)"
}


## Request Data

The endpoint expects a JSON payload with the following structure:

```json
{
  "email": "string (required, valid email format, minimum 5 characters)",
  "password": "string (required, minimum 6 characters)"
}





