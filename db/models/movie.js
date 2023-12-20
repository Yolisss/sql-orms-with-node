//ORMs for Node.js
//ORM interact with a SQL based db with sequelize
//sequelize = create and using models with JS and SQL together
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    title: Sequelize.STRING,
  }, { sequelize });

  return Movie;
};

