# Apartment Project


https://documenter.getpostman.com/view/25486084/2s935vm15Z


#### How to use this project

- Install the packages.

> npm init -y

> npm i express mongoose dotenv 



#### Run the program with this command 

> npm  run dev or npm start


#### Create your .env 

```
PORT=******
NODE_ENV=****
MONGO_URI_DEV=***
MONGO_URI_PROD=***
```

#### Endpoint

**User Count**

- GET http://localhost:{port_number}/api/v1/count



**apartment upload**

- POST http://localhost:{port_number}/api/v1/upload

```json
{
  "name":"*********",
  "email": "********",
  "address": "********",
  "image": "******"
  
}
```
**Single apartment by unique email**

- GET http://localhost:{port_number}/api/v1/single/:email



**all apartment**

- GET http://localhost:{port_number}/api/v1/all