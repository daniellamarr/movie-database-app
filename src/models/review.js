/**
 * Review Model Initialization Function
 * @param  {Object} ModelParams - Model Parameters
 * @param  {Object} ModelParams.Sequelize - Sequelize
 * @param  {Object} ModelParams.db - Database Connection Object
 * @returns {Object} SequelizeModel
 */
export default ({Sequelize, db}) => {
  const Review = db.define('review', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    movieId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return Review;
};
