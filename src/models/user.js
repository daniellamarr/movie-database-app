/**
 * User Model Initialization Function
 * @param  {Object} ModelParams - Model Parameters
 * @param  {Object} ModelParams.Sequelize - Sequelize
 * @param  {Object} ModelParams.db - Database Connection Object
 * @param {Object} ModelParams.Review - Initialized Review Model
 * @returns {Object} SequelizeModel
 */
export default ({Sequelize, db, Review}) => {
  const User = db.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    watchlist: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      defaultValue: [],
    },
  });

  User.hasMany(Review, {constraints: true, onDelete: 'CASCADE'});
  return User;
};
