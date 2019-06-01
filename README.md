<img width="818" alt="Screen Shot 2019-05-26 at 2 29 55 PM" src="https://user-images.githubusercontent.com/43624894/58386840-e1315380-7fc2-11e9-9992-98b8c075d29d.png">

###  Project Title
  Interactive web-app which allows home gardeners to sell their garden produce and those that enjoy home-grown fruits, vegetables and flowers to be purchased at their own convenience! Home grown is always better!

#### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

#### Prerequisites
What things you need to install the software and how to install them

Give examples

#### Installing
1: Copy this repo and clone the copied repo to your computer.
2: Run npm install, this will install all the npm dependencies from the package.json file.
3: Install MySQL on your machine, if necessary -> https://www.mysql.com/
4: Set up your own localhost connection. In each of the .js files in this repo, update the connection setting as follows:

var connection = mysql.createConnection({
host     : 'localhost',
user     : 'your user information',
password : 'enter your password',
database : "q5ljo6rb17gnu4l6"
});

5: In MySQL Workbench, import schema.sql and schema-seeds.sql from this reop and run them to uploadthe DB onto
your localhost.
6: From the command-line,
  -to interact as a customer, run nodemon server.js to enter Customer Portal, and follow the prompts on-screen. To login, create a new user, buy and sell produce!
  
  -to update and adjust data, it refresh in your browser. 
  
  -to create new users, add an item to sell, search for items, log-in and look to see where people are selling what items, 
  run nodemon server.js and follow prompts on-screen.




--End with an example of getting some data out of the system or using it for a little demo--

--#### Deployment--
Add additional notes about how to deploy this on a live system

#### Built With
This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

Add-On and Plug-Ins
- Bootstrap
- Google Fonts
- JQuery
- Laravel
- Node
- MySQL


# Authors
<img width="223" alt="Screen Shot 2019-05-26 at 2 59 40 PM" src="https://user-images.githubusercontent.com/43624894/58387102-f90ad680-7fc6-11e9-9197-0f192da513dd.png">

 - [Emily Jonaitis](https://github.com/emilyfjonaitis)
 - [Corbin Brockbank](https://github.com/Corbin520)
 - [Marco Johns](https://github.com/MarcoJohns)
 - [Oksana Jacoby](https://github.com/OKOJ)
