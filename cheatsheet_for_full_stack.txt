MERN setup guide 
1. Create a folder for your project: beltreviewer 
2. cd beltReviewer (go into the project)
3. Initialize a javascript package for the project using: npm init -y 
4. Install dependencies: npm install express cors mongoose 
5. Create a server.js file in the project folder 
6. Create a server folder in the project folder 
7. Make 4 directories in the server folder: config, models, controllers, routes 
8. Make a mongoose.config.js file in the config folder 
9. Set up the config.js file as usual—>make sure you change name of db to something unique that you havent used yet 
10. Set up server.js as usual (remember to require the mongoose config, don’t require the routes yet b/c they have not been created yet)
11. CHECKPOINT-Test it using nodemon server.js (running the server) to make sure it says established connection with db 
12. Create a model file as usual in the models folder. Set up model according to wireframe and project requirements. 
13. Create a controller file in the controllers folder, and set up the controllers to work with your models that you imported- Controller file needs the import to connect with the model. Have the crud functions in the controllers
14. Create a routes file in the routes folder and set up routes. Import the controllers in the routes file. Make sure the methods in the controllers are referenced in the routes 
15. In server.js, import (require) the routes and pass the app object to it (make sure this is the second to last line in server.js- basically the require routes part is underneath the app.use parts)
17. Enable CORS-> in server.js import it and then insert the app.use(cors()) command
18. CHECKPOINT- test all routes using postman before building the front end
19.NPX create-react-app client inside the project folder
20. Cd into client
21. Revert to react version 17 and run npm install at the end
22. Inside the client folder, npm install axios react-router-dom@5