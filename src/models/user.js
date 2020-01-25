/**
 * User Model Initialization Function
 * @param  {Object} ModelParams - Model Parameters
 * @param  {Object} ModelParams.Sequelize - Sequelize
 * @param  {Object} ModelParams.db - Database Connection Object
 * @returns {Object} SequelizeModel
 */
export default ({Sequelize, db}) => {
	const User = db.define("user", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		username: {
			type: Sequelize.STRING,
			allowNull: false
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		watchlist: {
			type: Sequelize.ARRAY(Sequelize.INTEGER),
            defaultValue: []
		},
		ratedMovies: {
			type: Sequelize.ARRAY(Sequelize.INTEGER),
            defaultValue: []
		}
	});

	return User;
};
