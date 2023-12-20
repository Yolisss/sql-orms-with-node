//exports db obj which holds Sequelize and db
//configs, as well as models
//exposing sequelize package wherever you import
//models into your code 

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db',
  logging: false
});

const db = {
  sequelize,
  Sequelize,
  models: {},
};

db.models.Movie = require('./models/movie.js')(sequelize);

module.exports = db;

