// //include sequelize to program
// const Sequelize = require("sequelize");
// //connect to SQLite db
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'movies.db'
// });

const db = require('./db');
const { Movie } = db.models;

//async IIFE
// (async () =>{
//     try{
//         //test that connection to db is ok
//         await sequelize.authenticate();
//         console.log("Connection to the db successful!");
//     } catch(err) {
//         console.error('Error connecting to the database', error);
//     }
// })();

//Movie Model
//extends used to create a subclass, or a child of another class
// class Movie extends Sequelize.Model {}

//defines a new table in db
//first arg includes attributes
//second arg is sequelize instance (line 4)
// Movie.init({
//     title: Sequelize.STRING
// }, { sequelize });

(async () =>{
    //sync 'Movies' table
    //deletes an existing table each time you start
    //your app, and recreates it from the model definition
    await sequelize.sync({ force: true });
    
    try {
        const movieInstances = await Promise.all([
           Movie.create({
            title: "Princess and the Frog"
        }),

        //New Entry
            Movie.create({
            title: "Moana"
        }),
        //New Entry
            Movie.create({
            title: "Mulan"
        })
        ]);

        const moviesJSON = movieInstances.map(movie => movie.toJSON());
        console.log(moviesJSON);
        
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
})();