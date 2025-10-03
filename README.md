
How to run project

1 Go to root folder of project and do npm install

2  Make changes in your mongo db url and replica set in .env file

3 Run-> node app.js

4 Call the api url ' http://127.0.0.1:3000/api/orders' from postman using below sample payload 

{
  "customerName": "Test Atomicity",
  "items": [
    { "productName": "Shoes", "quantity": 1, "price": 59.99 },
    { "productName": "Hat", "quantity": 2, "price": 19.99 }
  ]
}