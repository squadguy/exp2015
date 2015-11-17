# exp2015

	This ExpressJS application purpose is to connect to a MongoDB and return JSON.
	
	Application requires a MongoDB running on 127.0.0.1:27017.  Machine must have a database
	called "test", which contains a collection name "user."  Collection "user" can be stocked
	with data from file "primer-dataset.json" located in the project's root directory.  
	
	In addition to the requires from express-generator, there is an additional require for
	Mongoose.  The absolute path for the mongoose connection is 127.0.0.1:27017/test.

	In development environment use DEBUG=exp2015:* npm start to start local server and
	debugging.  Once application is running use localhost:3000/users to retrieve the
	JSON from the user collection in the test database.

	An additional feature is the applications / path.  If you query localhost:3000/, the
	application will route you to an index.html page with hogan templating.  Please note
	that the data used for root's templating is NOT connected to the database.

	Additional Information:

	Application uses Hogan for templating, and LESS-middleware for styles.
